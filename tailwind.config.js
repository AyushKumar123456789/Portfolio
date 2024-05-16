/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nav_color: {
          400: "#8232ff",
        },
        back_groud: {
          800: "#1C1678",
          500: "#8576FF",
          400: "#7BC9FF",
        },
        white_extra: {
          300: "#F4F3F2",
        },
      },
    },

    fontFamily: {
      signature: ["Dancing Script", "cursive"],
    },
  },
  plugins: [],
};
