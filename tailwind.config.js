/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'main': '#69348C',
    },
  },
  plugins: [ require("flowbite/plugin")],
}
}
