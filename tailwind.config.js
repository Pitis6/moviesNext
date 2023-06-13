/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        home: "rgb(26, 29, 41)",
        nav: "#0e0b14",
      },
      spacing: {
        70: "70px",
      },
      width: {
        800: "800px",
        240: "calc(20% - 16px);",
      },
      translate: {
        5000: "-50%",
      },
      gap: {
        11: "20px 20px",
      },
      margin: {
        "10auto": "10px auto",
      },
    },
  },
  plugins: [require("daisyui")],
};
