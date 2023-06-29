/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily:{
      'sans':['Rubik', 'sans-serif'],
      'serif':['Roboto Slab', 'serif'],
      'mono':['Roboto Mono', 'monospace'],
      'display':['Bagel Fat One', 'cursive']
    }
  },
  plugins: [],
}

