# Instagram Basic Display API Setup Guide for @amore_via_grace

This guide will walk you through setting up the Instagram Basic Display API to display real posts from the @amore_via_grace Instagram account on the website.

## Prerequisites

- Access to the @amore_via_grace Instagram account
- A Facebook account (can be personal or business)
- Admin access to deploy environment variables

## Step 1: Create a Facebook App

1. **Go to Facebook Developers**
   - Visit [https://developers.facebook.com/apps/](https://developers.facebook.com/apps/)
   - Click "Create App"

2. **Choose App Type**
   - Select "Consumer" as the app type
   - Click "Next"

3. **App Details**
   - App Name: "Amore Via Grace Website"
   - App Contact Email: Use Grace's email
   - Click "Create App"

## Step 2: Add Instagram Basic Display Product

1. **In your app dashboard:**
   - Scroll down to "Add Products to Your App"
   - Find "Instagram Basic Display" and click "Set Up"

2. **Create Instagram App**
   - Click "Create New App" in the Instagram Basic Display section
   - This creates an Instagram App ID (different from Facebook App ID)

## Step 3: Configure Instagram Basic Display

1. **Basic Display Settings:**
   - Go to Instagram Basic Display > Basic Display
   - Add these to "Valid OAuth Redirect URIs":
     \`\`\`
     https://amoreviagrace.com.au/auth/instagram/callback
     https://localhost:3000/auth/instagram/callback
     \`\`\`
   - Add to "Deauthorize Callback URL":
     \`\`\`
     https://amoreviagrace.com.au/auth/instagram/deauthorize
     \`\`\`
   - Add to "Data Deletion Request URL":
     \`\`\`
     https://amoreviagrace.com.au/auth/instagram/delete
     \`\`\`

2. **Save Changes**

## Step 4: Add Instagram Test User

1. **In Instagram Basic Display > Roles:**
   - Click "Add Instagram Testers"
   - Enter the @amore_via_grace Instagram username
   - Click "Submit"

2. **Accept Invitation (on Instagram):**
   - Log into the @amore_via_grace Instagram account
   - Go to Settings > Apps and Websites > Tester Invites
   - Accept the invitation from your Facebook app

## Step 5: Generate Access Token

1. **Get Authorization Code:**
   - Replace `{app-id}` with your Instagram App ID in this URL:
   \`\`\`
   https://api.instagram.com/oauth/authorize
     ?client_id={app-id}
     &redirect_uri=https://amoreviagrace.com.au/auth/instagram/callback
     &scope=user_profile,user_media
     &response_type=code
   \`\`\`

2. **Visit the URL while logged into @amore_via_grace**
   - This will redirect you to your callback URL with a code parameter
   - Copy the code from the URL

3. **Exchange Code for Token:**
   - Use the code to get a short-lived access token (see Step 6)

## Step 6: Get Long-Lived Access Token

Use this curl command (replace the placeholders):

\`\`\`bash
# Step 1: Get short-lived token
curl -X POST \
  https://api.instagram.com/oauth/access_token \
  -F client_id={app-id} \
  -F client_secret={app-secret} \
  -F grant_type=authorization_code \
  -F redirect_uri=https://amoreviagrace.com.au/auth/instagram/callback \
  -F code={code-from-step-5}

# Step 2: Exchange for long-lived token (60 days)
curl -i -X GET "https://graph.instagram.com/access_token
  ?grant_type=ig_exchange_token
  &client_secret={app-secret}
  &access_token={short-lived-token}"
\`\`\`

## Step 7: Get User ID

\`\`\`bash
curl -i -X GET "https://graph.instagram.com/me?fields=id,username&access_token={long-lived-token}"
\`\`\`

## Step 8: Set Environment Variables

Add these to your deployment environment:

\`\`\`env
INSTAGRAM_ACCESS_TOKEN=your_long_lived_access_token_here
INSTAGRAM_USER_ID=your_instagram_user_id_here
\`\`\`

## Step 9: Test the Integration

The website will automatically use the real Instagram feed once these environment variables are set.

## Token Refresh (Important!)

Long-lived tokens expire after 60 days. Set up automatic refresh:

\`\`\`bash
# Refresh token (can be done before expiry)
curl -i -X GET "https://graph.instagram.com/refresh_access_token
  ?grant_type=ig_refresh_token
  &access_token={current-long-lived-token}"
\`\`\`

## Troubleshooting

### Common Issues:

1. **"Invalid OAuth access token"**
   - Token may have expired
   - Refresh the token using the refresh endpoint

2. **"Application does not have permission"**
   - Make sure @amore_via_grace accepted the tester invitation
   - Check that the Instagram account is connected to the Facebook app

3. **"Invalid redirect URI"**
   - Ensure redirect URIs in Facebook app match exactly
   - Include both production and development URLs

4. **Rate Limiting**
   - Instagram allows 200 requests per hour per user
   - The website caches responses for 1 hour to stay within limits

### Testing Commands:

\`\`\`bash
# Test if token works
curl -i -X GET "https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption&access_token={token}"

# Check token info
curl -i -X GET "https://graph.instagram.com/access_token?fields=expires_in&access_token={token}"
\`\`\`

## Security Notes

- Never commit access tokens to version control
- Use environment variables for all sensitive data
- Regularly rotate access tokens
- Monitor API usage in Facebook Developer Console

## Support

If you encounter issues:
1. Check the Facebook Developer Console for error messages
2. Verify all URLs and credentials
3. Ensure the Instagram account has accepted the tester invitation
4. Contact the development team for assistance
\`\`\`

Now let me create a helper script to test the Instagram API connection:
