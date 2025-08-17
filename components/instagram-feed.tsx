"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Heart, Instagram, AlertCircle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import AnimationObserver from "@/components/animation-observer"
import { getInstagramPosts, type InstagramServiceResponse } from "@/lib/instagram-service"
import { formatInstagramDate, truncateCaption, type InstagramPost } from "@/lib/instagram"

interface InstagramFeedProps {
  limit?: number
  showCaptions?: boolean
  className?: string
}

export default function InstagramFeed({ limit = 8, showCaptions = true, className = "" }: InstagramFeedProps) {
  const [response, setResponse] = useState<InstagramServiceResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [retryCount, setRetryCount] = useState(0)

  const fetchPosts = async () => {
    try {
      setLoading(true)
      const result = await getInstagramPosts(limit)
      setResponse(result)
    } catch (err) {
      console.error("Instagram feed error:", err)
      setResponse({
        success: false,
        posts: [],
        error: "Failed to load Instagram posts",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [limit])

  const handleRetry = () => {
    setRetryCount((prev) => prev + 1)
    fetchPosts()
  }

  if (loading) {
    return (
      <div className={`space-y-4 ${className}`}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {Array.from({ length: limit }).map((_, index) => (
            <div key={index} className="aspect-square bg-gray-200 rounded-md animate-pulse" />
          ))}
        </div>
      </div>
    )
  }

  if (!response) {
    return (
      <div className="text-center py-8">
        <Instagram className="h-12 w-12 mx-auto text-gray-400 mb-4" />
        <p className="text-gray-600 text-sm mb-4">Unable to load Instagram posts</p>
        <Button onClick={handleRetry} variant="outline" size="sm">
          <RefreshCw className="h-4 w-4 mr-2" />
          Try Again
        </Button>
      </div>
    )
  }

  return (
    <div className={className}>
      {/* Show status message if there are issues */}
      {!response.success && response.error && (
        <Alert className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="text-sm">
            {response.fromCache ? "Showing cached posts - " : ""}
            {response.error}
            {!response.fromCache && (
              <Button onClick={handleRetry} variant="ghost" size="sm" className="ml-2 h-auto p-1 text-xs">
                Retry
              </Button>
            )}
          </AlertDescription>
        </Alert>
      )}

      {/* Show success message for cached data */}
      {response.success && response.fromCache && (
        <div className="text-center mb-4">
          <p className="text-xs text-gray-500">
            Showing cached posts • Last updated: {new Date().toLocaleTimeString()}
          </p>
        </div>
      )}

      {/* Posts grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {response.posts.map((post, index) => (
          <InstagramPostCard key={post.id} post={post} showCaption={showCaptions} delay={index * 100} />
        ))}
      </div>

      {/* Rate limit info (for development) */}
      {process.env.NODE_ENV === "development" && response.rateLimitRemaining && (
        <div className="text-center mt-4">
          <p className="text-xs text-gray-400">API calls remaining: {response.rateLimitRemaining}</p>
        </div>
      )}
    </div>
  )
}

interface InstagramPostCardProps {
  post: InstagramPost
  showCaption?: boolean
  delay?: number
}

function InstagramPostCard({ post, showCaption = true, delay = 0 }: InstagramPostCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <AnimationObserver className="fade-in" delay={delay}>
      <div className="group relative">
        <Link
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative aspect-square overflow-hidden rounded-md bg-gray-100"
        >
          {!imageError ? (
            <Image
              src={post.thumbnail_url || post.media_url}
              alt={truncateCaption(post.caption || "Instagram post from @amore_via_grace", 50)}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImageError(true)}
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <Instagram className="h-8 w-8 text-gray-400" />
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex items-center space-x-4 text-white">
              <div className="flex items-center space-x-1">
                <Heart className="h-4 w-4" />
                <span className="text-xs font-medium">View</span>
              </div>
              <ExternalLink className="h-4 w-4" />
            </div>
          </div>

          {/* Media type indicator */}
          {post.media_type === "CAROUSEL_ALBUM" && (
            <div className="absolute top-2 right-2 bg-black/60 rounded-full p-1">
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
            </div>
          )}

          {post.media_type === "VIDEO" && (
            <div className="absolute top-2 right-2 bg-black/60 rounded-full p-1">
              <div className="w-3 h-3 border-l-2 border-white border-l-white ml-0.5"></div>
            </div>
          )}
        </Link>

        {/* Caption (optional) */}
        {showCaption && post.caption && (
          <div className="mt-2">
            <p className="text-xs text-gray-600 leading-relaxed">{truncateCaption(post.caption, 80)}</p>
            <p className="text-xs text-gray-400 mt-1">{formatInstagramDate(post.timestamp)}</p>
          </div>
        )}
      </div>
    </AnimationObserver>
  )
}
