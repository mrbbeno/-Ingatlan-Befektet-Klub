/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ibk-bg':      '#FAFAF8',
        'ibk-surface': '#FFFFFF',
        'ibk-alt':     '#F2F0EB',
        'ibk-ink':     '#0A0A0A',
        'ibk-muted':   '#6B6560',
        'ibk-border':  '#E2DED8',
        'ibk-orange':  '#1B365D',
        'ibk-dark':    '#0F0F0F',
        /* compat */
        'ibk-cta':     '#1B365D',
        'ibk-warm':    '#6B6560',
        'ibk-forest':  '#0F0F0F',
        'ibk-text':    '#FAFAF8',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        inter:    ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
