"use server"

import { getInstagramFeed } from "@/lib/instagram"

export async function fetchInstagramPosts(limit = 8) {
  try {
    const posts = await getInstagramFeed(limit)
    return { success: true, posts }
  } catch (error) {
    console.error("Server action Instagram error:", error)
    return { success: false, error: "Failed to fetch Instagram posts" }
  }
}
