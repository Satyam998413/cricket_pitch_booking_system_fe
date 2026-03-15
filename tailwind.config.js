/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
       colors: {
        primary: "#1E40AF",
        accent: "#F97316"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
} 