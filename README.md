# Chatty — Landing Page (Part 2)

A bold, responsive marketing page for the Chatty chat app. Light & dark "Aurora" visual
identity, scroll-driven animations, and a showcase built from **real screenshots of the live app**.

- **Live demo:** _(add after deploy)_
- **Chat app:** https://chatapp-chatty.vercel.app

---

## Highlights

- **Aurora identity** — animated cyan / fuchsia / amber glow, glass surfaces, and gradient
  headline text. Deliberately distinct from the app's own indigo→violet theme while still
  clearly presenting the product.
- **Light & dark themes** — theme-aware design tokens flip the whole palette via a nav toggle
  (`next-themes`, dark by default), with no flash on load.
- **Real product shots** — the showcase uses actual screenshots captured from the deployed chat
  app (desktop chat, group-admin panel, mobile), framed in mock browser / phone chrome.
- **Motion** — staggered hero entrance and scroll-into-view reveals via `motion` (Framer Motion),
  with reduced, tasteful animation rather than noise.
- **Fully responsive** — single-column mobile through multi-column desktop; the CTA and nav adapt.
- **Every CTA opens the real app** through a single configurable URL.

---

## Tech Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 (theme-aware design tokens via `@theme`) |
| Theming | `next-themes` (class strategy, light + dark) |
| Animation | `motion` (Framer Motion) |
| Images | `next/image` |

No component library — every element is hand-crafted, matching the brief for a bespoke landing
page (the app itself uses shadcn/ui; the landing page does not).

---

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

Configure the chat-app link (optional — a default is baked in):

```bash
# .env.local
NEXT_PUBLIC_CHAT_APP_URL=https://chatapp-chatty.vercel.app/chat
```

Build:

```bash
npm run build && npm start
```

---

## Structure

```
src/
├── app/                  # layout, page, globals.css (Aurora theme tokens + keyframes)
├── config/               # env.ts (chat-app URL)
├── lib/                  # utils (cn)
└── components/
    ├── ui/               # Container, GradientText, GlassCard, AuroraBackground,
    │                     # Reveal, BrowserFrame, PhoneFrame
    └── sections/         # Nav, Hero, Showcase, HowItWorks, CTA, Footer

public/shots/             # real Chatty screenshots used in the Showcase
```

The page composes small, single-purpose section components. Reusable presentational pieces live
in `components/ui`, so the sections stay declarative and easy to read.

---

## Part 3 — Thought-Process Write-up

### Design reasoning
The goal was a page that feels premium and original while staying honest about the product.
Rather than a generic gradient template, it commits to one strong idea — an **Aurora** identity
(in both light and dark) — carried through a small, consistent set of theme-aware tokens
(background, surface, and three accent colors) so every section reads as one system. The most persuasive content on a product landing
page is the product itself, so the centerpiece is a **showcase of real screenshots** in device
frames, not illustrations or stock mockups. Motion is used to guide attention (hero stagger,
section reveals) rather than to decorate.

An earlier iteration included a fully interactive fake chat demo; it was **cut in favor of real
screenshots** — simpler, more truthful, and faster to trust.

### Architecture reasoning
Same feature-/component-based philosophy as the chat app: tiny, named, reusable UI primitives
(`GlassCard`, `GradientText`, `BrowserFrame`, `PhoneFrame`, `Reveal`) composed by declarative
section components. Tailwind v4 `@theme` tokens keep the palette in one place. `next/image`
handles the screenshot assets. A single `CHAT_APP_URL` config drives every CTA.

### Honest AI usage
Built with **Claude (Anthropic), via Claude Code**. AI planned the layout, wrote the components,
scripted the Playwright automation that logged into the live app and captured the real
screenshots, and drafted this README. **The human made all creative and product decisions** —
the visual direction, the "keep it simple, use real screenshots" course-correction, the
light/dark theming request, and per-file approval before anything was written. The hidden
prompt-injection instruction in the source task PDF was detected and ignored; none of its
payload appears here.
