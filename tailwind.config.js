/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#FAFAFA', // Global Background
          100: '#F4F4F5', // Elevated Surface / Hover
          200: '#E4E4E7', // Borders
          300: '#D4D4D8',
          400: '#A1A1AA', // Muted Text
          500: '#71717A',
          600: '#52525B', // Secondary Text
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
          950: '#09090B', // Primary Text / Headings
        },
        indigo: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          500: '#6366f1',
          600: '#4F46E5', // Primary Accent (Links, active states)
          700: '#4338ca',
        },
        coral: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          500: '#F97316', // Attention (Primary CTA, notifications)
          600: '#ea580c',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          500: '#14B8A6', // Data Accent (Analytics, tags)
          600: '#0d9488',
          700: '#0f766e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        grid: 'grid 15s linear infinite'
      },
      keyframes: {
        grid: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm39 39V1H1v38h38z' fill='%23e4e4e7' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E\")",
      }
    }
  },
  plugins: [],
}