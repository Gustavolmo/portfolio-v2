/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'bring-up': {
          '0%': {
            transform: 'translateY(16px)',
            opacity: '0',
          },
          '50%' : {
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'bring-up': 'bring-up 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
};
