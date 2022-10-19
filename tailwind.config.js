/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'bg': 'url("/images/bg.jpeg")',
      'check': 'url(/images/check.svg)',
      'stars1': 'url("/images/stars-1.png")',
      'stars2': 'url("/images/stars-2.png")',
      'triangle': 'url("/images/triangle.svg")',
    },
    extend: {
      colors: {
        purple: '#4f00af',
        electricIndigo: '#6b00f5',
        lavenderIndigo: '#9444ff',
        melrose: '#c0beff',
        blueMoon: '#ebecff',
        goldenTainoi: '#ffc854',
        athensGray: '#eff0f7',
        hawkesBlue: '#d9dbe9',
        stormGray: '#6e7093',
        white: '#ffffff',
        violet: '#1B0D3D',
        babyPink: '#EBC3C7',
        lilacBush: '#997dd9',
        persianBlue: '#6a00f8',
      },
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    }
  },
  plugins: [],
}
