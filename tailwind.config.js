/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        landingImg: "url('../public/images/landing-image.jpg')",
        crossfitImg: "url('../public/images/crossfit-image.jpg')",
        boxingImg: "url('../public/images/boxing-image.jpg')",
        personaltrainerImg:
          "url('../public/images/personal-trainer-image.jpg')",
        bodybuildingImg: "url('../public/images/bodybuilding-image.jpg')",
        yogaImg: "url('../public/images/yoga-image.jpg')",
        additionalImg: "url('../public/images/aditional-image.jpg')",
        loginImg: "url('../public/images/login-image.jpg')",
        personalPageImg: "url('../public/images/personal-page-image.jpg')",

        blackOverlay:
          "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
