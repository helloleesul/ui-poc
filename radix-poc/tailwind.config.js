const { violet, blackA, mauve, green } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        default: "4px",
      },
      fontSize: {
        xs: [
          "12px",
          {
            lineHeight: "18px",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        sm: [
          "14px",
          {
            lineHeight: "21px",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        base: [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        xl: ["20px", "30px"],
        "2xl": [
          "24px",
          {
            lineHeight: "36px",
            letterSpacing: "0",
            fontWeight: "700",
          },
        ],
      },
      colors: {
        ...mauve,
        ...violet,
        ...green,
        ...blackA,
        primary: "#00adff",
        black: "#000000",
        grey: "#abb5ba",
        "light-grey": "#d2dbdf",
      },
      keyframes: {
        overlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        contentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
