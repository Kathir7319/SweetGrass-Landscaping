/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2fbf4',
          100: '#e1f7e6',
          200: '#c4eed0',
          300: '#96dfad',
          400: '#61c683',
          500: '#38a85f',
          600: '#29884a',
          700: '#236c3c',
          800: '#1f5633',
          900: '#1c472c',
          950: '#0b2615',
        },
        earth: {
          50: '#fdf8f4',
          100: '#f8ece1',
          200: '#eed6c0',
          300: '#e1b796',
          400: '#d1936c',
          500: '#c4774a',
          600: '#b25e3d',
          700: '#944933',
          800: '#793d2e',
          900: '#633429',
          950: '#361813',
        },
        stoneBg: '#fbfbf8',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(22, 101, 52, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04)',
        'elevated': '0 20px 40px -15px rgba(22, 101, 52, 0.12), 0 8px 16px -6px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
