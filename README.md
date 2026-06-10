# Ingatlan Befektető Klub – Demo Homepage

A stunning Next.js 14 demo homepage for **Ingatlan Befektető Klub**, a Hungarian real estate investment club based in Miskolc.

## Tech Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** v3
- **Framer Motion** for scroll animations
- **Lucide React** for icons
- **Google Fonts**: Playfair Display + Inter

## Custom Components

All animation components are implemented from scratch in:

- `/components/magicui/` — BorderBeam, ShimmerButton, AnimatedGradientText, BlurFade, NumberTicker, Meteors, WordPullUp
- `/components/reactbits/` — BlurText, TrueFocus, SpinningText, CardSpotlight, Magnet, AnimatedList, CountUp
- `/components/sections/` — Navbar, Hero, StatsBar, Services, WhyUs, ClubMembership, Testimonials, Contact, Footer

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the demo.

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or push to GitHub and import in [vercel.com/new](https://vercel.com/new).

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Primary green (dark) | `#1e3a1e` | Borders, accents |
| Accent green (mid) | `#2d6a2d` | Button bg |
| Bright green (CTA) | `#3d8b3d` | CTAs, icons |
| Light green (hover) | `#4aab4a` | Hover states |
| Off-white text | `#f4f1eb` | Body text |
| Warm gray | `#b8b4ac` | Secondary text |
| Dark bg | `#0d0d0d` | Main background |
| Card bg | `#111811` | Cards |
| Alt section bg | `#0f150f` | Alternating sections |

## Structure

```
app/
├── layout.tsx          # Root layout with fonts & metadata
├── page.tsx            # Main page (all sections)
└── globals.css         # Global styles

components/
├── magicui/            # MagicUI-inspired components
├── reactbits/          # ReactBits-inspired components
└── sections/           # Page sections

lib/
└── utils.ts            # cn() utility

next.config.js          # Next.js config (Unsplash image domain)
tailwind.config.js      # Tailwind with IBK brand colors
```

---

*Demo created by [Optimaai](https://optimaai.hu)*
