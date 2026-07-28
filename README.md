# artariq.dev — Portfolio & Case Story Hub

> Cloud · Full-Stack Engineer. 11 projects across cloud infrastructure and full-stack web — each documented with the problem, the architecture, and the measurable outcome.

**Live:** [artariq.dev](https://artariq.dev)

---

## The Problem

Your GitHub profile is a list of repos. Your LinkedIn is a list of titles. Neither tells a hiring manager *what you actually built and whether it worked.*

A portfolio that just lists tech stacks doesn't differentiate you. What differentiates you is the architecture diagram, the trade-off you made, the metric that went from bad to good after you deployed.

---

## The Solution

A case-story hub where every project has the same structure:

**Problem → Solution → Impact → Architecture → Implementation Details → Stats**

Not a gallery of screenshots. A record of engineering decisions and their outcomes.

### Project Structure

```
Kubernetes Platform
  ├─ Problem: Managed K8s is a black box — you lose control when it breaks
  ├─ Solution: Self-managed clusters on 3 clouds with full observability
  ├─ Impact: Identical platform on AWS, Azure, DigitalOcean — zero vendor lock
  ├─ Stack: K8s, Terraform, Istio, ArgoCD, Prometheus/Grafana, Falco
  └─ Stats: 43 resources, zero clicks · 3 clouds, one platform

Solar PV CRM
  ├─ Problem: Disconnected tools (Eye on Task, Xero, Zapier) = lost leads
  ├─ Solution: Django CRM with Claude AI handling 5,000+ emails/month
  ├─ Impact: 36% lower CPA, 70% better ROAS, €11-23K saved year 1
  ├─ Stack: Django, PostgreSQL/PostGIS, Celery, Claude, Stripe
  └─ Stats: 5,000+ AI emails/mo · €11-23K saved · 6-week delivery

... 9 more projects across both sections
```

### Sections

**Cloud & Infrastructure** (5 projects):
- Production-Grade Kubernetes Platform — self-managed on 3 clouds
- Secure Supply Chain — SLSA L2, Cosign keyless, Kyverno enforcement
- AWS Secure Baseline — multi-account security at organisation level
- Azure + OPA Pipeline — policy-as-code blocking bad configs at plan time
- GitOps Platform — Sealed Secrets + ArgoCD across 3 environments

**Full-Stack** (6 projects):
- Find-24 — Algolia + Mapbox marketplace (180+ providers, 600+ clients)
- YearPeek — yearly calendar SaaS (full-year view, multi-calendar)
- Solar PV CRM — Claude AI email automation (5,000+ emails/month)
- Clinical CRM — PostGIS location analytics, 38% lower CPA
- PaperFisher — headless Magento 2 storefront
- Kitchenz — interactive product configurator
- Birdie — Shopify agency SaaS landing page
- 021 — headless CMS with Strapi + Cloudflare Workers

---

## What Makes It Interesting

- **Every project has a scalar outcome.** Not "built a K8s cluster" but "43 resources, zero clicks, 3 clouds, one platform." Hiring managers scan for numbers. Every case story has a stat block at the top.
- **Architecture diagrams in every cloud project.** Real SVG diagrams show the system boundary, data flow, and component relationships — not a screenshot of a dashboard.
- **Two sections, one narrative.** Cloud infra projects prove I can design and operate production systems. Full-stack projects prove I can ship user-facing products. Together they tell the Cloud | Full-Stack story without me having to say it.
- **The engineering expertise accordion.** 6 expandable cards (Frontend, Backend, FullStack, DevOps, Cloud, Security) let me say "I know these things" without a boring skills table. Each card links to the relevant case stories.
- **Embedded Lead Generator CTA.** The Contact section links directly to ask.artariq.dev — the portfolio is a TOF funnel for my Lead Generator, and the Lead Generator is a MOF funnel for consulting engagements.
- **Terminal-style hero quiz.** The landing page runs an auto-rotating business challenge quiz with dark mode — it's the only portfolio I've seen that tries to qualify a visitor's pain before asking them to look at anything.

---

## Tech Stack

- **React 18** + React Router 6
- **Tailwind CSS 3** (dark mode)
- **Framer Motion** — page transitions
- **react-fast-marquee** — skill icons
- **GitHub Pages** — deploy via GitHub Actions

---

## Development

```bash
npm install
PORT=3001 npm start
npm run build
```

---

## Contact

- **Email:** artariq.dev.1@gmail.com
- **LinkedIn:** [linkedin.com/in/artariq-dev](https://linkedin.com/in/artariq-dev)
- **GitHub:** [github.com/artariq-dev](https://github.com/artariq-dev)
- **Site:** [artariq.dev](https://artariq.dev)
