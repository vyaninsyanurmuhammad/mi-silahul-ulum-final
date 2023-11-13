import type { Config } from 'tailwindcss'
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'aztec': {
          DEFAULT: '#F5F8F7',
          100: '#E0E7E6',
          200: '#C0CFCC',
          300: '#99AFAD',
          400: '#738E8C',
          500: '#597371',
          600: '#465B5A',
          700: '#3A4B4A',
          800: '#313E3D',
          900: '#2C3535',
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
