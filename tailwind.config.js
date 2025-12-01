/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          dark: '#2a4d3a',
          mid: '#3d6b4f',
          light: '#5a8f6f'
        },
        mist: {
          dark: '#8b9b8f',
          light: '#a3b5a0'
        },
        cream: '#f5f1e8',
        sky: {
          light: '#d4e8e8',
          pale: '#e8f0f0'
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        editorial: ['Newsreader', 'serif'],
        body: ['Crimson Pro', 'serif'],
        mono: ['Space Grotesk', 'sans-serif']
      },
      animation: {
        drift: 'drift 4s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        rain: 'rain 0.5s linear infinite',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(20px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        rain: {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        }
      }
    },
  },
  plugins: [],
}
