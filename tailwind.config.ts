import type { Config } from 'tailwindcss'
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px',
      },
      colors: {
        primary: '#FF7829',
        secondary: '#3396FF',
        base: {
          100: 'var(--color-base-100)',
          200: 'var(--color-base-200)',
          300: 'var(--color-base-300)',
          hover: 'var(--color-base-hover)',
          shadow: 'var(--color-shadow)',
          backdrop: 'var(--color-base-backdrop)',
          input: 'var(--color-input)'
        },
        content: {
          100: 'var(--color-content-100)',
          200: 'var(--color-content-200)'
        },
        divider: {
          100: 'var(--color-line-100)',
          200: 'var(--color-line-200)',
          300: 'var(--color-line-300)',
        },
        link: 'var(--color-link)',
        error: 'var(--color-error)',
      },
      boxShadow: {
        nav: '0 4px 4px -2px var(--color-line-200)',
        issuing: '2px 2px 0px 0px var(--color-line-200)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.link': {},
        '.link-current': {},
        '.link-current-mobile': {},
      })
    }),
  ],
}
export default config
