/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      maxWidth: {
        144: "1440px",
        card: "1376px",
      },
      fontSize: {
        custom: "115px",
        mobile: "74px",
        xs: "12px",
        cod: "40px",
      },
      width: {
        card: "1376px",
        144: "1440px",
        3677: "3677px",
      },
      height: {
        custom: "600px",
        mobile: "900px",
        card: "860px",
        174: "174px",
      },
      colors: {
        "cod-black": "#262625",
        "cod-white": "#F3F3F1",
        "cod-blue": "#EBEDFF",
        "cod-pink": "#FFEDF5",
        "cod-green": "#ECFFCE",
        "cod-dark-blue": "#BADAFF",
        "cod-yellow": "#FFFAC2",
        "cod-orange": " #FFBCAB",
      },
      borderRadius: {
        card: "60px",
      },
    },
  },
  plugins: [],
};

