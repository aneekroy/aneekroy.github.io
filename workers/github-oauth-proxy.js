/**
 * GitHub OAuth Proxy - Cloudflare Worker
 *
 * This worker proxies GitHub OAuth Device Flow requests to bypass CORS restrictions.
 *
 * SETUP INSTRUCTIONS:
 * 1. Go to https://dash.cloudflare.com/
 * 2. Click "Workers & Pages" in the sidebar
 * 3. Click "Create Application" > "Create Worker"
 * 4. Name it something like "github-oauth-proxy"
 * 5. Click "Deploy"
 * 6. Click "Edit code" and paste this entire file
 * 7. Click "Save and Deploy"
 * 8. Your worker URL will be: https://github-oauth-proxy.<your-subdomain>.workers.dev
 * 9. Update WORKER_URL in blogpost.html with your worker URL
 *
 * GITHUB OAUTH APP SETUP:
 * 1. Go to https://github.com/settings/developers
 * 2. Click "New OAuth App"
 * 3. Fill in:
 *    - Application name: Your app name
 *    - Homepage URL: https://aneekroy.github.io
 *    - Authorization callback URL: https://aneekroy.github.io (not used for device flow)
 * 4. Click "Register application"
 * 5. Copy the Client ID
 * 6. Click "Generate a new client secret" and copy it
 * 7. Add the client secret as an environment variable in your worker:
 *    - Go to Worker Settings > Variables
 *    - Add: GITHUB_CLIENT_SECRET = your_secret_here
 */

export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    const url = new URL(request.url);
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    };

    try {
      // Request device code
      if (url.pathname === '/device/code') {
        const body = await request.json();

        const response = await fetch('https://github.com/login/device/code', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            client_id: body.client_id,
            scope: body.scope || 'repo',
          }),
        });

        const data = await response.json();
        return new Response(JSON.stringify(data), { headers: corsHeaders });
      }

      // Poll for access token
      if (url.pathname === '/access_token') {
        const body = await request.json();

        // Build request body - include client_secret if available
        const tokenBody = {
          client_id: body.client_id,
          device_code: body.device_code,
          grant_type: 'urn:ietf:params:oauth:grant-type:device_code',
        };

        // Add client secret from environment variable if available
        if (env.GITHUB_CLIENT_SECRET) {
          tokenBody.client_secret = env.GITHUB_CLIENT_SECRET;
        }

        const response = await fetch('https://github.com/login/oauth/access_token', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(tokenBody),
        });

        const data = await response.json();
        return new Response(JSON.stringify(data), { headers: corsHeaders });
      }

      // Health check
      if (url.pathname === '/health') {
        return new Response(JSON.stringify({ status: 'ok', hasSecret: !!env.GITHUB_CLIENT_SECRET }), {
          headers: corsHeaders
        });
      }

      return new Response(JSON.stringify({ error: 'Not found' }), {
        status: 404,
        headers: corsHeaders
      });

    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: corsHeaders
      });
    }
  },
};
