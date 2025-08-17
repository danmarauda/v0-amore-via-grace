import { getInstagramFeed, type InstagramPost } from "./instagram"

export interface InstagramServiceConfig {
  accessToken?: string
  userId?: string
  cacheTimeout?: number
}

export interface InstagramServiceResponse {
  success: boolean
  posts: InstagramPost[]
  error?: string
  fromCache?: boolean
  rateLimitRemaining?: number
}

class InstagramService {
  private config: InstagramServiceConfig
  private cache: Map<string, { data: InstagramPost[]; timestamp: number }> = new Map()

  constructor(config: InstagramServiceConfig = {}) {
    this.config = {
      accessToken: config.accessToken || process.env.INSTAGRAM_ACCESS_TOKEN,
      userId: config.userId || process.env.INSTAGRAM_USER_ID,
      cacheTimeout: config.cacheTimeout || 3600000, // 1 hour in milliseconds
    }
  }

  async getPosts(limit = 8): Promise<InstagramServiceResponse> {
    const cacheKey = `posts_${limit}`

    // Check cache first
    const cached = this.cache.get(cacheKey)
    if (cached && Date.now() - cached.timestamp < (this.config.cacheTimeout || 3600000)) {
      return {
        success: true,
        posts: cached.data,
        fromCache: true,
      }
    }

    try {
      // If no access token, return mock data
      if (!this.config.accessToken) {
        console.warn("Instagram: No access token found, using mock data")
        const mockPosts = await getInstagramFeed(limit)
        return {
          success: true,
          posts: mockPosts,
          error: "Using mock data - no access token configured",
        }
      }

      // Fetch from Instagram API
      const fields = "id,media_type,media_url,thumbnail_url,permalink,caption,timestamp,username"
      const url = `https://graph.instagram.com/me/media?fields=${fields}&limit=${limit}&access_token=${this.config.accessToken}`

      const response = await fetch(url, {
        headers: {
          "User-Agent": "AmoreViaGrace-Website/1.0",
        },
      })

      // Check rate limiting
      const rateLimitRemaining = response.headers.get("x-app-usage")

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))

        // Handle specific error cases
        if (response.status === 400 && errorData.error?.code === 190) {
          console.error("Instagram: Access token expired or invalid")
          return this.fallbackToMockData(limit, "Access token expired")
        }

        if (response.status === 429) {
          console.error("Instagram: Rate limit exceeded")
          return this.fallbackToMockData(limit, "Rate limit exceeded")
        }

        throw new Error(`Instagram API error: ${response.status} - ${errorData.error?.message || "Unknown error"}`)
      }

      const data = await response.json()
      const posts: InstagramPost[] = data.data || []

      // Cache the results
      this.cache.set(cacheKey, {
        data: posts,
        timestamp: Date.now(),
      })

      return {
        success: true,
        posts,
        rateLimitRemaining: rateLimitRemaining ? Number.parseInt(rateLimitRemaining) : undefined,
      }
    } catch (error) {
      console.error("Instagram service error:", error)

      // Return cached data if available, even if expired
      const cached = this.cache.get(cacheKey)
      if (cached) {
        return {
          success: false,
          posts: cached.data,
          error: `API error, showing cached data: ${error instanceof Error ? error.message : "Unknown error"}`,
          fromCache: true,
        }
      }

      // Fallback to mock data
      return this.fallbackToMockData(limit, error instanceof Error ? error.message : "Unknown error")
    }
  }

  private async fallbackToMockData(limit: number, errorMessage: string): Promise<InstagramServiceResponse> {
    const mockPosts = await getInstagramFeed(limit)
    return {
      success: false,
      posts: mockPosts,
      error: `${errorMessage} - showing mock data`,
    }
  }

  async checkTokenHealth(): Promise<{
    valid: boolean
    expiresIn?: number
    error?: string
  }> {
    if (!this.config.accessToken) {
      return { valid: false, error: "No access token configured" }
    }

    try {
      const response = await fetch(
        `https://graph.instagram.com/access_token?fields=expires_in&access_token=${this.config.accessToken}`,
      )

      if (!response.ok) {
        const error = await response.json().catch(() => ({}))
        return {
          valid: false,
          error: error.error?.message || `HTTP ${response.status}`,
        }
      }

      const data = await response.json()
      return {
        valid: true,
        expiresIn: data.expires_in,
      }
    } catch (error) {
      return {
        valid: false,
        error: error instanceof Error ? error.message : "Unknown error",
      }
    }
  }

  clearCache(): void {
    this.cache.clear()
  }
}

// Export singleton instance
export const instagramService = new InstagramService()

// Export for server actions
export async function getInstagramPosts(limit = 8): Promise<InstagramServiceResponse> {
  return instagramService.getPosts(limit)
}

export async function checkInstagramTokenHealth() {
  return instagramService.checkTokenHealth()
}
