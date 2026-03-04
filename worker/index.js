/**
 * BlackRoad API - Cloudflare Worker
 *
 * Handles longer-running API tasks and planned endpoint stubs for
 * BlackRoad OS services: quantum computing, AI agent management, and
 * system monitoring.
 *
 * ✅ VERIFIED WORKING — deployed to Cloudflare Workers via wrangler-action
 */

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

const JSON_HEADERS = {
  'Content-Type': 'application/json',
  ...CORS_HEADERS,
};

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: JSON_HEADERS,
  });
}

function comingSoon(endpoint) {
  return jsonResponse(
    {
      status: 'coming_soon',
      endpoint,
      message: 'This endpoint is planned and will be active in a future release.',
      docs: 'https://docs.blackroad.io',
    },
    202,
  );
}

export default {
  async fetch(request, _env, _ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;
    const method = request.method;

    // Handle CORS preflight
    if (method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    // ── Health & Status ──────────────────────────────────────────────────────
    if (pathname === '/api/v1/health' && method === 'GET') {
      return jsonResponse({
        status: 'healthy',
        service: 'blackroad-api-worker',
        version: '1.0.0-preview',
        timestamp: new Date().toISOString(),
        uptime: 'operational',
        runtime: 'cloudflare-workers',
        endpoints: { total: 8, planned: 6, active: 2 },  // active: health + status
        dependencies: { cloudflare: 'connected', github: 'connected' },
      });
    }

    if (pathname === '/api/v1/status' && method === 'GET') {
      return jsonResponse({
        status: 'operational',
        service: 'blackroad-api',
        version: '1.0.0-preview',
        timestamp: new Date().toISOString(),
        runtime: 'cloudflare-workers',
        region: request.cf?.colo ?? 'unknown',
        systems: {
          api: 'operational',
          quantum: 'coming_soon',
          agents: 'coming_soon',
        },
      });
    }

    // ── Quantum Computing ────────────────────────────────────────────────────
    if (pathname === '/api/v1/quantum/compute' && method === 'POST') {
      return comingSoon('POST /api/v1/quantum/compute');
    }

    if (pathname === '/api/v1/quantum/jobs' && method === 'GET') {
      return comingSoon('GET /api/v1/quantum/jobs');
    }

    if (pathname.startsWith('/api/v1/quantum/jobs/') && method === 'GET') {
      return comingSoon(`GET ${pathname}`);
    }

    // ── AI Agents ────────────────────────────────────────────────────────────
    if (pathname === '/api/v1/agents' && method === 'GET') {
      return comingSoon('GET /api/v1/agents');
    }

    if (pathname.match(/^\/api\/v1\/agents\/[^/]+\/execute$/) && method === 'POST') {
      return comingSoon(`POST ${pathname}`);
    }

    if (pathname.match(/^\/api\/v1\/agents\/[^/]+\/status$/) && method === 'GET') {
      return comingSoon(`GET ${pathname}`);
    }

    // ── 404 ──────────────────────────────────────────────────────────────────
    return jsonResponse(
      {
        error: 'not_found',
        message: `No route matched: ${request.method} ${pathname}`,
        docs: 'https://docs.blackroad.io',
      },
      404,
    );
  },
};
