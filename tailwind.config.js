const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // from the second config
    "./src/**/*.{js,ts,jsx,tsx}", // from the second config
    "./src/**/*.{ts,tsx}", // from the first config
  ],
  darkMode: "class", // from the first config
  theme: {
    extend: {
      colors: {
        // colors from the second config
        "primary": "#141414",
        "navy": "#172554",
        "specialtext": "#fcd34d",
      },
      animation: {
        // animation from the first config
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        // keyframes from the first config
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [
    // add global CSS variables for colors from the first config
    addVariablesForColors,
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}
