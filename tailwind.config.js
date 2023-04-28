/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#343434',
        accent: '#922',
      },
      backgroundImage: {
        site: "url(./assets/bg.jpg)",
        about: "url(./assets/bgabout.png)",
        sitewhite: "url(./src/assets/sitebgwhite.jpg)",
        illushome: "url(./src/assets/animation-home.gif)",
        lighthomeillus: "url(./src/assets/lightanimation.gif)",
        aboutlight: "url(./src/assets/aboutlight.png)",
        email: "url(./src/assets/getintouch.gif)",
        lightemail: "url(./src/assets/lightgetintouch.gif)",
        emailsend: "url(./src/assets/email.gif)",
        lightemailsend: "url(./src/assets/lightemail.gif)"
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide')
  ],
}

