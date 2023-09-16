/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
      },
      colors: {
        userMarineBlue: "hsl(213, 96%, 18%)",
        userPurplishBlue: "hsl(243, 100%, 62%)",
        userPastelBlue: "hsl(228, 100%, 84%)",
        userLightBlue: "hsl(206, 94%, 87%)",
        userStrawberryRed: "hsl(354, 84%, 57%)",
        userCoolGrey: "hsl(231, 11%, 63%)",
        userLightGrey: "hsl(229, 24%, 87%)",
        userMagnolia: "hsl(217, 100%, 97%)",
        userAlabaster: "hsl(231, 100%, 99%)",
        userInputRadioBG: "hsl(230, 75%, 98%)",
        userWhite: "hsl(0, 0%, 100%)",
      },
      backgroundImage: {
        "sidebarMobile": "url('/bg-sidebar-mobile.svg')",
        "sidebarDesktop": "url('/bg-sidebar-desktop.svg')",
      }
    },
  },
  plugins: [],
}