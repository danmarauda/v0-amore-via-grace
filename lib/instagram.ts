// Instagram Basic Display API integration
export interface InstagramPost {
  id: string
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"
  media_url: string
  thumbnail_url?: string
  permalink: string
  caption?: string
  timestamp: string
  username?: string
}

export interface InstagramFeedResponse {
  data: InstagramPost[]
  paging?: {
    cursors: {
      before: string
      after: string
    }
    next?: string
  }
}

// Configuration for Instagram API
const INSTAGRAM_CONFIG = {
  // These would typically come from environment variables
  ACCESS_TOKEN: process.env.INSTAGRAM_ACCESS_TOKEN,
  USER_ID: process.env.INSTAGRAM_USER_ID,
  BASE_URL: "https://graph.instagram.com",
}

export async function getInstagramFeed(limit = 12): Promise<InstagramPost[]> {
  try {
    // If no access token is available, return mock data for development
    if (!INSTAGRAM_CONFIG.ACCESS_TOKEN) {
      console.warn("Instagram access token not found, using mock data")
      return getMockInstagramPosts(limit)
    }

    const fields = "id,media_type,media_url,thumbnail_url,permalink,caption,timestamp,username"
    const url = `${INSTAGRAM_CONFIG.BASE_URL}/me/media?fields=${fields}&limit=${limit}&access_token=${INSTAGRAM_CONFIG.ACCESS_TOKEN}`

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`)
    }

    const data: InstagramFeedResponse = await response.json()
    return data.data || []
  } catch (error) {
    console.error("Error fetching Instagram feed:", error)
    // Fallback to mock data on error
    return getMockInstagramPosts(limit)
  }
}

// Mock data for development/fallback
function getMockInstagramPosts(limit: number): InstagramPost[] {
  const mockPosts: InstagramPost[] = [
    {
      id: "1",
      media_type: "IMAGE",
      media_url: "/placeholder.svg?height=400&width=400&text=Grace+crafting+custom+bracelet",
      permalink: "https://www.instagram.com/amore_via_grace/p/mock1",
      caption:
        "✨ Working on a beautiful custom name bracelet! Love how each piece comes together with so much care and attention to detail 💚 #AmoreViaGrace #CustomJewelry #HandmadeWithLove #MelbourneMade",
      timestamp: "2024-01-15T10:30:00Z",
      username: "amore_via_grace",
    },
    {
      id: "2",
      media_type: "IMAGE",
      media_url: "/placeholder.svg?height=400&width=400&text=Birthstone+collection+display",
      permalink: "https://www.instagram.com/amore_via_grace/p/mock2",
      caption:
        "💎 Our birthstone collection is perfect for celebrating those special milestones! Each stone is carefully selected and set with love ✨ #Birthstones #HandcraftedJewelry #AmoreViaGrace #PersonalizedGifts",
      timestamp: "2024-01-14T15:45:00Z",
      username: "amore_via_grace",
    },
    {
      id: "3",
      media_type: "IMAGE",
      media_url: "/placeholder.svg?height=400&width=400&text=Happy+customer+friendship+set",
      permalink: "https://www.instagram.com/amore_via_grace/p/mock3",
      caption:
        "👭 Nothing makes me happier than seeing the joy these friendship bracelets bring! Best friends forever 💕 #FriendshipBracelets #BestFriends #AmoreViaGrace #HandmadeJewelry",
      timestamp: "2024-01-13T12:20:00Z",
      username: "amore_via_grace",
    },
    {
      id: "4",
      media_type: "IMAGE",
      media_url: "/placeholder.svg?height=400&width=400&text=Behind+scenes+studio",
      permalink: "https://www.instagram.com/amore_via_grace/p/mock4",
      caption:
        "🎨 Behind the scenes in my Melbourne studio! Currently working on several custom orders and loving every minute of the creative process ✨ #BehindTheScenes #StudioLife #YoungEntrepreneur #MelbourneArtist",
      timestamp: "2024-01-12T09:15:00Z",
      username: "amore_via_grace",
    },
    {
      id: "5",
      media_type: "IMAGE",
      media_url: "/placeholder.svg?height=400&width=400&text=New+charm+collection",
      permalink: "https://www.instagram.com/amore_via_grace/p/mock5",
      caption:
        "🎯 Excited to share some new charm designs! Perfect for creating your own unique story through jewelry ✨ #CharmBracelets #CustomCharms #AmoreViaGrace #PersonalizedJewelry",
      timestamp: "2024-01-11T16:30:00Z",
      username: "amore_via_grace",
    },
    {
      id: "6",
      media_type: "IMAGE",
      media_url: "/placeholder.svg?height=400&width=400&text=Customer+testimonial",
      permalink: "https://www.instagram.com/amore_via_grace/p/mock6",
      caption:
        '💌 "Grace created the most beautiful bracelet for my daughter. The attention to detail is incredible!" - Thank you for trusting me with such a special piece! 🎓 #CustomerLove #TestimonialTuesday #AmoreViaGrace',
      timestamp: "2024-01-10T14:00:00Z",
      username: "amore_via_grace",
    },
    {
      id: "7",
      media_type: "IMAGE",
      media_url: "/placeholder.svg?height=400&width=400&text=Packaging+process",
      permalink: "https://www.instagram.com/amore_via_grace/p/mock7",
      caption:
        "📦 Packaging orders with love! Each piece gets wrapped with care and includes a handwritten note 💝 #EcoFriendly #Packaging #SustainableBusiness #AmoreViaGrace",
      timestamp: "2024-01-09T11:45:00Z",
      username: "amore_via_grace",
    },
    {
      id: "8",
      media_type: "IMAGE",
      media_url: "/placeholder.svg?height=400&width=400&text=Sweet+16+special",
      permalink: "https://www.instagram.com/amore_via_grace/p/mock8",
      caption:
        "🎉 Creating something special for a milestone birthday! Love being part of these important moments 💖 #MilestoneJewelry #Sweet16 #AmoreViaGrace #CustomCreations",
      timestamp: "2024-01-08T13:20:00Z",
      username: "amore_via_grace",
    },
  ]

  return mockPosts.slice(0, limit)
}

// Helper function to format Instagram timestamp
export function formatInstagramDate(timestamp: string): string {
  const date = new Date(timestamp)
  const now = new Date()
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

  if (diffInHours < 1) return "Just now"
  if (diffInHours < 24) return `${diffInHours}h ago`
  if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`
  return date.toLocaleDateString()
}

// Helper function to truncate caption
export function truncateCaption(caption: string, maxLength = 100): string {
  if (!caption) return ""
  if (caption.length <= maxLength) return caption
  return caption.substring(0, maxLength).trim() + "..."
}
