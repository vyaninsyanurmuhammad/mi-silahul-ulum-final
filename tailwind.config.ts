import type { Config } from 'tailwindcss'
import { nextui } from "@nextui-org/react"
import typography from "@tailwindcss/typography"
import { PluginAPI } from "tailwindcss/types/config"

const defaultTheme = require("tailwindcss/defaultTheme")
const withMT = require("@material-tailwind/react/utils/withMT")

const config: Config = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamly: {
        'poppins': ['Poppins', 'sans-serif']
      },
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
        'night': {
          DEFAULT: '#F6F6F6',
          100: '#E7E7E7',
          200: '#D1D1D1',
          300: '#B0B0B0',
          400: '#888888',
          500: '#6D6D6D',
          600: '#5D5D5D',
          700: '#4F4F4F',
          800: '#454545',
          900: '#3D3D3D',
        },
      },

      typography: ({ theme }: { theme: PluginAPI["theme"] }) => ({
        DEFAULT: {
          css: {
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none'
            },
            h5: {
              fontSize: theme('fontSize.sm'),
            },
            h6: {
              fontSize: theme('fontSize.xs'),
            },
          }
        }

      }),
    },
  },
  darkMode: "class",
  plugins: [nextui(), typography, require("tw-elements/dist/plugin")],
})

export default config
