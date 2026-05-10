# nextjs-localization

A side-by-side reference for integrating [`next-intl`](https://next-intl.dev/) with the
**Next.js App Router**, comparing two routing strategies in working demos.

If you've ever opened the next-intl docs and wondered "do I actually need
locale-based routing for my app?" — this repo answers that question with two
runnable projects you can clone, diff, and copy from.

## What's inside

| Folder | Strategy | When to use |
|---|---|---|
| [`with-locale-based-routing/`](./with-locale-based-routing) | URL contains the locale (`/en/...`, `/tr/...`) | SEO-driven sites, public marketing pages, multi-region apps |
| [`without-locale-based-routing/`](./without-locale-based-routing) | Locale resolved from headers/cookies, no URL prefix | Internal tools, dashboards, single-region apps |

Both demos use the same translations and components — the only difference is the
routing setup, so you can diff them and pick the strategy that fits your app.

## Stack

- Next.js (App Router)
- next-intl
- JavaScript / JSX

## Quick start

```bash
git clone https://github.com/gokhanjs/nextjs-localization.git
cd nextjs-localization

# Pick a demo
cd with-locale-based-routing       # or without-locale-based-routing
npm install
npm run dev
```

Open http://localhost:3000 and switch languages from the UI.

## Live demos

- **With locale-based routing** → [link once deployed]
- **Without locale-based routing** → [link once deployed]

## Why this exists

Most i18n examples online either show a trivial single-page setup or jump
straight into edge cases without explaining the routing decision. This repo
isolates that decision into two clean, runnable references.

## License

MIT
