/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        clinic: {
          bg: '#FBFCFD',
          surface: '#F2F6F8',
          surface2: '#EAF1F3',
          blue: '#3E6E8E',
          blueDark: '#2B4F66',
          teal: '#7FB6AE',
          tealText: '#357568', // darker teal for text (WCAG AA ~5.2:1 on light bg)
          sage: '#A8C8BE',
          gold: '#C8A35B',
          ink: '#243B45',
          muted: '#5C6F78',
          line: '#E3EBEF',
        },
      },
      fontFamily: {
        heading: ['Lora', 'Georgia', 'serif'],
        body: ['Raleway', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px rgba(36, 59, 69, 0.05), 0 1px 2px rgba(36, 59, 69, 0.04)',
        card: '0 8px 30px rgba(36, 59, 69, 0.07)',
        lift: '0 18px 50px rgba(36, 59, 69, 0.12)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      maxWidth: {
        content: '72rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-24px) translateX(12px)' },
        },
      },
      animation: {
        float: 'float 14s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
