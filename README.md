# 🚀 BlackRoad API

## ✅ Verified Working

| Check | Status |
|---|---|
| Cloudflare Pages deployment | ✅ Pinned SHA — passes org policy |
| Cloudflare Worker (`/api/v1/health`, `/api/v1/status`) | ✅ Deployed via `wrangler-action@v3.14.1` |
| CodeQL security analysis | ✅ Upgraded to v4, pinned SHA |
| Lighthouse CI | ✅ Upgraded to v12, pinned SHA, runs after deploy |
| PR automerge | ✅ Enabled via `peter-evans/enable-pull-request-automerge@v3` |
| All GitHub Actions pinned to full commit SHA | ✅ Org policy satisfied |

[![Deploy to Cloudflare Pages](https://github.com/BlackRoad-OS/blackroad-api/actions/workflows/deploy.yml/badge.svg)](https://github.com/BlackRoad-OS/blackroad-api/actions/workflows/deploy.yml)
[![Security Checks](https://github.com/BlackRoad-OS/blackroad-api/actions/workflows/security.yml/badge.svg)](https://github.com/BlackRoad-OS/blackroad-api/actions/workflows/security.yml)
[![Automerge](https://github.com/BlackRoad-OS/blackroad-api/actions/workflows/automerge.yml/badge.svg)](https://github.com/BlackRoad-OS/blackroad-api/actions/workflows/automerge.yml)

**BlackRoad API** - RESTful API endpoints for BlackRoad OS services, quantum computing resources, and AI infrastructure.

## 🌐 Live Deployment

- **Production:** [https://blackroad-api.pages.dev](https://blackroad-api.pages.dev)
- **Status:** 🟢 Coming Soon
- **Version:** 1.0.0-preview

## ✨ Features

- **Quantum Computing API** - Submit and manage quantum computation jobs
- **AI Agent Management** - List, execute, and monitor AI agents
- **System Status** - Real-time health metrics and monitoring
- **Brand Compliant** - Full BlackRoad brand design system integration
- **Performance Optimized** - Lighthouse score target >90

## 📋 Planned Endpoints

### System & Health
- `GET /api/v1/status` - Get system status and health metrics
- `GET /api/v1/health` - Health check endpoint

### Quantum Computing
- `POST /api/v1/quantum/compute` - Submit quantum computation jobs
- `GET /api/v1/quantum/jobs` - List quantum jobs
- `GET /api/v1/quantum/jobs/{id}` - Get job details

### AI Agents
- `GET /api/v1/agents` - List available AI agents
- `POST /api/v1/agents/{id}/execute` - Execute AI agent
- `GET /api/v1/agents/{id}/status` - Get agent execution status

## 🔧 Development

```bash
# Clone the repository
git clone https://github.com/BlackRoad-OS/blackroad-api.git
cd blackroad-api

# Open locally
open index.html
```

## 🚀 Deployment

Automatically deployed on push to `main`:
- **Cloudflare Pages** — static developer portal
- **Cloudflare Worker** — API handler for longer-running tasks (`worker/index.js`)

### Manual Deployment

```bash
# Deploy static site (Cloudflare Pages)
wrangler pages deploy . --project-name=blackroad-api

# Deploy Worker (Cloudflare Workers)
wrangler deploy
```

## 🔌 Cloudflare Worker (API)

The `worker/index.js` Worker handles all `/api/*` routes and runs on
Cloudflare's edge network for low-latency, long-running task support.

**Active endpoints (Worker):**
- `GET /api/v1/health` — health check with runtime metadata
- `GET /api/v1/status` — system status including edge region

**Planned endpoints (returning `202 Coming Soon`):**
- `POST /api/v1/quantum/compute`
- `GET /api/v1/quantum/jobs`
- `GET /api/v1/quantum/jobs/{id}`
- `GET /api/v1/agents`
- `POST /api/v1/agents/{id}/execute`
- `GET /api/v1/agents/{id}/status`

## 🔐 Authentication

API access requires authentication via:
- **OAuth 2.0** - Standard OAuth flow
- **API Keys** - Generate at [console.blackroad.io](https://console.blackroad.io)

## 📚 Documentation

Full API documentation available at:
- [docs.blackroad.io](https://docs.blackroad.io)
- OpenAPI/Swagger spec coming soon

## 🎨 Brand Compliance

✅ Fully compliant with BlackRoad Brand Design System:
- Hot Pink (#FF1D6C) primary color
- Golden Ratio spacing (φ = 1.618)
- SF Pro Display typography
- Official gradient (135deg @ 38.2% & 61.8%)

## 📊 Monitoring

- **Uptime:** Monitored via Cloudflare Analytics
- **Performance:** Lighthouse CI on every deployment
- **Security:** CodeQL analysis + dependency scanning

## 🔒 Security

- HTTPS enforced
- Security headers configured
- Rate limiting planned
- CORS properly configured
- Regular vulnerability scanning

## 📄 License

Copyright © 2026 BlackRoad OS, Inc. All rights reserved.

## 🤝 Contributing

This is a production repository. Changes require:
1. GitHub issue or approved task
2. Pull request with full description
3. CI/CD pipeline passing
4. Code review approval

## 🔗 Related Projects

- [BlackRoad OS](https://github.com/BlackRoad-OS/blackroad-os-interface)
- [BlackRoad Quantum](https://github.com/BlackRoad-OS/blackroad-os-quantum)
- [BlackRoad 30k Agents](https://github.com/BlackRoad-OS/blackroad-30k-agents)

---

Built with ❤️ by BlackRoad OS Team | [blackroad.io](https://blackroad.io)
