/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', 'index.html'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'background-galaxy': "url('/background.png')",
        'galaxy-gradient':
          'linear-gradient(90deg, #A5F3FC 3.63%, #3B82F6 39.53%, #E879F9 102.04%)',
        'game-gradient':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
      },
      dropShadow: {
        text: 'box-shadow: 0px 4px 4px 0px #00000040',
      },
    },
  },
  plugins: [],
};
