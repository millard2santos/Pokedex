/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'typeNormal' : '#A8A090',
        'typeWater' : '#3899F8',
        'typeSteel' : '#A8A8C0',
        'typeBug' : '#A8B820',
        'typeDragon' : '#7860E0',
        'typeElectric' : '#F8D030',
        'typeGhost' : '#6060B0',
        'typeFire' : '#F05030',
        'typeFairy' : '#E79FE7',
        'typeIce' : '#58C8E0',
        'typeFighting' : '#A05038',
        'typeGrass' : '#78C850',
        'typePhychic' : '#F870A0',
        'typeRock' : '#B8A058',
        'typeDark' : '#7A5848',
        'typeGround' : '#E9D6A4',
        'typePoison' : '#B058A0',
        'typeFlying' : '#98A8F0',
      }
    },
  },
  plugins: [],
}
