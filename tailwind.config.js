/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  
    extend: {
      fill: {
        current: 'currentColor',
      },
      colors: {
        'footerText': '#8B8C96',
        'footerIcons': '#494949',
        'buttonGray': '#626262',
        'backgroundColor': '#BDBDBD',
        'textColor': '#121416',
        'textHoverColor': '#424242',
      },
    },
  },
  plugins: [],
}

