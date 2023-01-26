/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily:{
      'moc':['Mochiy Pop P One'], 
    },
    extend: {
      backgroundImage: {
        'ta': "url('../src/image/triangle.png')"
      }
    },
  },
  plugins: [],
}
