/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateX(-10%)" },
          "100%": { opacity: "1", transform: "translateX(0);" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in",
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"], // Use Dancing Script as the cursive font
        spartan: ["League Spartan", "sans-serif"], // Use League Spartan as the default sans-serif font
      },
    },
  },
  plugins: [],
};
