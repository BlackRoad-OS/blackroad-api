# CLAUDE.md - AI Assistant Guide for BlackRoad API

This document provides comprehensive guidance for AI assistants working with the BlackRoad API codebase.

## Project Overview

**BlackRoad API** is a static developer portal and documentation site for BlackRoad OS services. It showcases planned API endpoints for quantum computing, AI agent management, and system monitoring.

- **Type:** Static HTML/CSS site (no backend, no build step)
- **Version:** 1.0.0-preview
- **Status:** Coming Soon (portal live, API endpoints not yet active)
- **Production URL:** https://blackroad-api.pages.dev
- **Hosting:** Cloudflare Pages

## Technology Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic markup |
| CSS3 | Custom properties, Flexbox, animations |
| Cloudflare Pages | Static hosting with auto-deployment |
| GitHub Actions | CI/CD orchestration |
| CodeQL | Security analysis |
| Lighthouse CI | Performance monitoring |

**No dependencies required** - This is a zero-build, vanilla HTML/CSS project.

## Directory Structure

```
blackroad-api/
├── index.html          # Main landing page (developer portal)
├── health.json         # Health check endpoint response template
├── _headers            # Cloudflare security headers configuration
├── README.md           # Project documentation
├── CONTRIBUTING.md     # Contribution guidelines with brand system
├── LICENSE             # BlackRoad OS proprietary license
└── .github/workflows/
    ├── deploy.yml      # Cloudflare Pages deployment + Lighthouse
    └── security.yml    # CodeQL security analysis
```

## Brand Compliance (CRITICAL)

All UI changes MUST follow the BlackRoad Brand Design System. Non-compliance will result in rejected PRs.

### Required Colors (CSS Variables)

```css
--black: #000000        /* Background */
--white: #FFFFFF        /* Text */
--amber: #F5A623        /* Accent */
--hot-pink: #FF1D6C     /* Primary Brand Color */
--electric-blue: #2979FF /* Secondary */
--violet: #9C27B0       /* Tertiary */
```

### Forbidden Colors - DO NOT USE

These colors are explicitly banned:
- `#FF9D00`, `#FF6B00`, `#FF0066`, `#FF006B`, `#D600AA`, `#7700FF`, `#0066FF`

### Golden Ratio Spacing (φ = 1.618)

```css
--space-xs: 8px       /* Base unit */
--space-sm: 13px      /* 8 × 1.618 */
--space-md: 21px      /* 13 × 1.618 */
--space-lg: 34px      /* 21 × 1.618 */
--space-xl: 55px      /* 34 × 1.618 */
--space-2xl: 89px     /* 55 × 1.618 */
--space-3xl: 144px    /* 89 × 1.618 */
```

### Typography

```css
font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif;
line-height: 1.618;  /* Golden Ratio - MANDATORY */
```

### Standard Gradient

```css
background: linear-gradient(135deg,
  var(--amber) 0%,
  var(--hot-pink) 38.2%,    /* Golden Ratio percentage */
  var(--violet) 61.8%,      /* Golden Ratio percentage */
  var(--electric-blue) 100%);
```

## Code Conventions

### CSS Patterns

1. **Define all colors/spacing in `:root`** using CSS custom properties
2. **Use Flexbox** for layouts (`display: flex`)
3. **Animation easing:** `cubic-bezier(0.4, 0, 0.2, 1)`
4. **Hover states:** Use `transform` and `box-shadow` for feedback
5. **Border radius:** Use spacing variables (e.g., `var(--space-md)`)

### HTML Patterns

1. **Semantic markup:** Use proper `<header>`, `<footer>`, `<main>` tags
2. **Accessibility:** Ensure color contrast meets WCAG standards
3. **Meta tags:** Include viewport, charset, and descriptive title

### File Naming

- Lowercase filenames
- Hyphens for multi-word: `my-component.html`
- Special Cloudflare files use underscore prefix: `_headers`

## Commit Message Format

Use emoji + conventional commits:

```
✨ feat: Add new feature
🐛 fix: Fix bug in component
📝 docs: Update documentation
🎨 style: Improve styling
♻️ refactor: Refactor code
✅ test: Add tests
🔧 chore: Update config
🚀 release: Production enhancements
🌌 enhance: Major updates
⚖️ legal: License/compliance updates
```

## CI/CD Pipeline

### Deployment (deploy.yml)

Triggers on push/PR to `main`:
1. Checkout code
2. Deploy to Cloudflare Pages via `cloudflare/pages-action@v1`
3. Run Lighthouse CI performance tests

### Security (security.yml)

Triggers on push/PR to `main` + weekly (Sundays at 00:00 UTC):
1. CodeQL initialization for JavaScript
2. Security vulnerability analysis

### Manual Deployment

```bash
wrangler pages deploy . --project-name=blackroad-api
```

## Security Configuration

The `_headers` file configures Cloudflare security headers:

- `X-Frame-Options: DENY` - Prevent clickjacking
- `X-Content-Type-Options: nosniff` - Prevent MIME sniffing
- `Strict-Transport-Security` - HSTS with 1-year max-age and preload
- `Content-Security-Policy` - Restrictive CSP (allows `unsafe-inline` for styles)
- `Permissions-Policy` - Disabled geolocation, microphone, camera

CORS is enabled only for `/health.json`.

## API Endpoints (Planned)

Currently 0 of 8 endpoints are active. Portal displays these planned endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/status` | System status and health metrics |
| GET | `/api/v1/health` | Health check endpoint |
| POST | `/api/v1/quantum/compute` | Submit quantum computation jobs |
| GET | `/api/v1/quantum/jobs` | List quantum jobs |
| GET | `/api/v1/quantum/jobs/{id}` | Get job details |
| GET | `/api/v1/agents` | List available AI agents |
| POST | `/api/v1/agents/{id}/execute` | Execute AI agent |
| GET | `/api/v1/agents/{id}/status` | Get agent execution status |

## Development Workflow

### Local Development

```bash
# Clone repository
git clone https://github.com/BlackRoad-OS/blackroad-api.git
cd blackroad-api

# Open in browser (no build required)
open index.html
```

### Making Changes

1. Create a feature branch
2. Make changes following brand guidelines
3. Test locally in multiple browsers
4. Verify brand compliance (colors, spacing, typography)
5. Test responsiveness (mobile, tablet, desktop)
6. Commit with proper emoji + conventional format
7. Push and create PR

### Testing Checklist

- [ ] Visual test in Chrome, Firefox, Safari
- [ ] Responsive design verification
- [ ] Brand color compliance (no forbidden colors)
- [ ] Golden ratio spacing applied
- [ ] Line height is 1.618
- [ ] Accessibility (color contrast, keyboard navigation)
- [ ] No console errors

## Key Constraints

1. **No build tools** - Keep the project static with zero dependencies
2. **Brand compliance is mandatory** - All UI must match the design system exactly
3. **Performance target** - Lighthouse score >90
4. **Proprietary license** - Cannot be forked/distributed without authorization
5. **Static only** - This is a portal; actual API backend is a separate project

## Related Resources

- **Documentation:** https://docs.blackroad.io
- **Console:** https://console.blackroad.io
- **Brand System:** https://brand.blackroad.io
- **Support Email:** blackroad.systems@gmail.com

## Related Repositories

- [BlackRoad OS Interface](https://github.com/BlackRoad-OS/blackroad-os-interface)
- [BlackRoad Quantum](https://github.com/BlackRoad-OS/blackroad-os-quantum)
- [BlackRoad 30k Agents](https://github.com/BlackRoad-OS/blackroad-30k-agents)

---

*Copyright 2026 BlackRoad OS, Inc. All rights reserved.*
