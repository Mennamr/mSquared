/** @type {import('tailwindcss').Config} */
module.exports = {
 
  content: [ "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT:'pink', //'#0D6EFD', // your main color
          light: '#479BFF',   // optional lighter shade
          dark: '#004CBA'   // optional darker shade
          
        },
        grey:{
          DEFAULT:'#919EAB'
        },
      },
    },
  },
  
  plugins: [ require("flowbite/plugin")],
  
  

}
