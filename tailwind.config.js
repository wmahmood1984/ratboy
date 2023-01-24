module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#824CF4",
        },
        gray: {
          DEFAULT: "rgb(124, 124, 124, 0.5)",
        },
        violet: {
          400: "#6F5E92",
        },
        red: {
          400: "#FF4848",
        },
        dark: {
          400: "#202734",
          500: "#111721",
          600: "#111721",
          700: "#2A3344",
        },
        yellow: {
          400: "#FFE074",
        },
      },
      borderColor: {
        lightDark: "#3C4555",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1140px",
          xl: "1140px",
          "2xl": "1320px",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
