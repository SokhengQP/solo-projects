/** @type {import('tailwindcss').Config} */
    
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  extend: {
    boxShadow: {
      'Inners': "inset 0 0 10px yellow",
    },
      screens: {
      
        'minMd' : {'min' : '728px'},
        'minXl': { 'min' : '1024px'},
        
        'maxMd': { 'max': '1024px' },
        'maxXl': { 'max': '1624px' },
      
      },
      
      display: {
        'webkit-kit': "-webkit-reflex-box"
      },
    
    },  

  plugins: [],
}

