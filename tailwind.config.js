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
        site: "url('./assets/bg.jpg')",
        about: "url(./assets/bg-about.png)",
        siteWhite: "url('./src/assets/site-bg-white.jpg')",
        homeIllus: "url('./src/assets/animation.gif')",
        lightHomeIllus: "url('./src/assets/lightAnimation.gif')",
        lightAbout: "url('./src/assets/light-bg-about.png')",
        email: "url('./src/assets/Getintouch.gif')",
        lightEmail: "url('./src/assets/lightGetintouch.gif')",
        emailSend: "url('./src/assets/email.gif')",
        lightEmailSend: "url('./src/assets/lightEmail.gif')"
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide')
  ],
}

