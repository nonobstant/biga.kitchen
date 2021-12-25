module.exports = {
  darkMode: 'class',
  content: [    "./index.html",    "./src/**/*.{vue,js,ts,jsx,tsx}",  ],
  theme: {
    extend: {
      colors: {
        sunset: {
          900: '#8A425E',
          800: '#984458',
          700: '#A6464F',
          600: '#B54C47',
          500: '#BE634E',
          400: '#CE704E',
          300: '#E69153',
          200: '#E99354',
          100: '#F4A75A',
        }
      }
    },
  },
  plugins: [],
}
