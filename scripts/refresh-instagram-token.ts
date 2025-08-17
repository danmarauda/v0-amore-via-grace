/**
 * Instagram Token Refresh Script
 *
 * This script refreshes your Instagram long-lived access token
 * Run with: npx tsx scripts/refresh-instagram-token.ts
 */

async function refreshInstagramToken() {
  const currentToken = process.env.INSTAGRAM_ACCESS_TOKEN

  console.log("🔄 Refreshing Instagram Access Token...\n")

  if (!currentToken) {
    console.error("❌ INSTAGRAM_ACCESS_TOKEN not found in environment variables")
    return
  }

  try {
    console.log("📡 Making refresh request...")

    const response = await fetch(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${currentToken}`,
      { method: "GET" },
    )

    if (response.ok) {
      const data = await response.json()

      console.log("✅ Token refreshed successfully!")
      console.log(`🔑 New Token: ${data.access_token}`)
      console.log(`⏰ Expires in: ${data.expires_in} seconds (${Math.floor(data.expires_in / (24 * 60 * 60))} days)`)
      console.log("")
      console.log("🔧 Next steps:")
      console.log("1. Update your INSTAGRAM_ACCESS_TOKEN environment variable with the new token")
      console.log("2. Deploy the updated environment variable to your hosting platform")
      console.log("3. The old token will continue to work until it expires")
    } else {
      const error = await response.json()
      console.error("❌ Token refresh failed:", error)

      if (error.error?.code === 190) {
        console.log("\n🔧 This usually means your current token has expired.")
        console.log("You'll need to generate a new token following the setup guide.")
      }
    }
  } catch (error) {
    console.error("❌ Refresh failed with error:", error)
  }
}

// Run the refresh
refreshInstagramToken()
