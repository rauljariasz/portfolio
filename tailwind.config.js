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
        sitewhite: "url(./assets/sitebgwhite.jpg)",
        about: "url(./assets/bgabout.png)",
        aboutlight: "url(./assets/aboutlight.png)",
        illushome: "url(./assets/animation-home.gif)",
        lighthomeillus: "url(./assets/lightanimation.gif)",
        email: "url(./assets/getintouch.gif)",
        lightemail: "url(./assets/lightgetintouch.gif)",
        emailsend: "url(./assets/email.gif)",
        lightemailsend: "url(./assets/lightemail.gif)"
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide')
  ],
}

