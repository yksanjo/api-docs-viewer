import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: { primary: '#0a0a0f', secondary: '#12121a', tertiary: '#1a1a24' },
        accent: { primary: '#00d4aa', secondary: '#7c3aed' },
        text: { primary: '#f4f4f5', secondary: '#a1a1aa', muted: '#71717a' },
        border: { DEFAULT: '#27272a' },
      },
    },
  },
  plugins: [],
}
export default config
