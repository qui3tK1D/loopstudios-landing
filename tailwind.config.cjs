/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        base: "0.9375rem",
      },
      maxWidth: {
        xs: "190px",
        xxl: "1440px",
      },
      letterSpacing: {
        widest: ".3em",
      },
      colors: {
        white: "hsl(0, 0%, 100%)",
        black: " hsl(0, 0%, 0%)",
        "dark-gray": "hsl(0, 0%, 55%)",
        "very-dark-gray": "hsl(0, 0%, 41%)",
      },
    },
    fontFamily: {
      alata: ["Alata", "sans-serif"],
      josefin: ["Josefin Sans", "sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1220px",
      xxl: "1440px",
    },
  },
  plugins: [],
};
