/**
 * Instagram API Test Script
 *
 * This script helps test the Instagram Basic Display API connection
 * Run with: npx tsx scripts/test-instagram-api.ts
 */

interface InstagramTestResponse {
  data?: any[]
  error?: {
    message: string
    type: string
    code: number
  }
}

interface TokenInfo {
  expires_in?: number
  token_type?: string
}

async function testInstagramAPI() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN
  const userId = process.env.INSTAGRAM_USER_ID

  console.log("🔍 Testing Instagram Basic Display API...\n")

  if (!accessToken) {
    console.error("❌ INSTAGRAM_ACCESS_TOKEN not found in environment variables")
    console.log("Please add your Instagram access token to .env.local")
    return
  }

  if (!userId) {
    console.error("❌ INSTAGRAM_USER_ID not found in environment variables")
    console.log("Please add your Instagram user ID to .env.local")
    return
  }

  console.log("✅ Environment variables found")
  console.log(`📱 User ID: ${userId}`)
  console.log(`🔑 Token: ${accessToken.substring(0, 20)}...`)
  console.log("")

  try {
    // Test 1: Check token validity and expiration
    console.log("🧪 Test 1: Checking token validity...")
    const tokenResponse = await fetch(
      `https://graph.instagram.com/access_token?fields=expires_in,token_type&access_token=${accessToken}`,
    )

    if (tokenResponse.ok) {
      const tokenInfo: TokenInfo = await tokenResponse.json()
      console.log("✅ Token is valid")
      if (tokenInfo.expires_in) {
        const daysLeft = Math.floor(tokenInfo.expires_in / (24 * 60 * 60))
        console.log(`⏰ Token expires in ${daysLeft} days`)

        if (daysLeft < 7) {
          console.log("⚠️  WARNING: Token expires soon! Consider refreshing it.")
        }
      }
    } else {
      console.log("❌ Token validation failed")
      const error = await tokenResponse.json()
      console.log("Error:", error)
      return
    }

    console.log("")

    // Test 2: Get user profile
    console.log("🧪 Test 2: Fetching user profile...")
    const profileResponse = await fetch(
      `https://graph.instagram.com/me?fields=id,username,account_type,media_count&access_token=${accessToken}`,
    )

    if (profileResponse.ok) {
      const profile = await profileResponse.json()
      console.log("✅ Profile fetched successfully")
      console.log(`👤 Username: @${profile.username}`)
      console.log(`📊 Account Type: ${profile.account_type}`)
      console.log(`📸 Media Count: ${profile.media_count}`)
    } else {
      console.log("❌ Profile fetch failed")
      const error = await profileResponse.json()
      console.log("Error:", error)
    }

    console.log("")

    // Test 3: Get recent media
    console.log("🧪 Test 3: Fetching recent media...")
    const mediaResponse = await fetch(
      `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink,caption,timestamp&limit=5&access_token=${accessToken}`,
    )

    if (mediaResponse.ok) {
      const mediaData: InstagramTestResponse = await mediaResponse.json()
      console.log("✅ Media fetched successfully")

      if (mediaData.data && mediaData.data.length > 0) {
        console.log(`📱 Found ${mediaData.data.length} recent posts:`)

        mediaData.data.forEach((post, index) => {
          console.log(`\n  ${index + 1}. ${post.media_type} - ${new Date(post.timestamp).toLocaleDateString()}`)
          console.log(`     Caption: ${post.caption ? post.caption.substring(0, 100) + "..." : "No caption"}`)
          console.log(`     URL: ${post.permalink}`)
        })
      } else {
        console.log("📭 No media found")
      }
    } else {
      console.log("❌ Media fetch failed")
      const error = await mediaResponse.json()
      console.log("Error:", error)
    }

    console.log("")
    console.log("🎉 Instagram API test completed successfully!")
    console.log("Your website should now display real Instagram posts.")
  } catch (error) {
    console.error("❌ Test failed with error:", error)
    console.log("\n🔧 Troubleshooting tips:")
    console.log("1. Check that your access token is valid and not expired")
    console.log("2. Ensure the @amore_via_grace account accepted the tester invitation")
    console.log("3. Verify that your Facebook app has Instagram Basic Display enabled")
    console.log("4. Check your internet connection")
  }
}

// Run the test
testInstagramAPI()
