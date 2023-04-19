/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}",

  ],
  theme: {
    extend: {},
    screens:{
      'xs':'0px',
      'al':'280px',
      'sx':'372px',
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px',
    }
  },
  plugins: [],
}

