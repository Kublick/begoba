module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Montserrat", "sans-serif"],
      body: ["Montserrat", "sans-serif"],
      dancing: ["Dancing Script"],
    },
    extend: {
      colors: {
        primary: {
          light: "#DBE2F3",
          DEFAULT: "#21409A",
          dark: "#13255C",
        },
        secondary: {
          light: "#F6AFC8",
          DEFAULT: "#E7407B",
          dark: "#a22d56",
        },
        mango: {
          light: "#fff3ec",
          btn: "#ff8f50",
          DEFAULT: "#FF833D",
        },
        whats: {
          DEFAULT: "#25d366",
        },
        telegram: {
          DEFAULT: "#229ED9",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
