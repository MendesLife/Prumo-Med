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
          dark: '#0c1a1d',
          deepTeal: '#083c44',
          subTeal: '#0a4852',
          teal: '#0e5a66',
          tealHover: '#083c44',
          mint: '#9fded8',
          ice: '#dcebeb',
          body: '#44555a',
          muted: '#5e6c73',
          border: '#eaeeed',
          borderDark: '#0c1a1d1a',
          surface: '#f3f5f4',
          amber: '#f0a93b',
        }
      },
      fontFamily: {
        sans: ['"Geist"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
        normal: '0',
        wide: '+0.04em',
        wider: '+0.06em',
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '28px',
        '4xl': '36px',
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(12, 26, 29, 0.05)',
        'card': '0 12px 36px rgba(12, 26, 29, 0.08)',
        'float': '0 20px 48px rgba(12, 26, 29, 0.12)',
        'pill': '0 4px 20px rgba(12, 26, 29, 0.06)',
      }
    },
  },
  plugins: [],
}
