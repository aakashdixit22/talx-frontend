// const {
//   default: flattenColorPalette,
// } = require("tailwindcss/lib/util/flattenColorPalette");

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html", // from the second config
//     "./src/**/*.{js,ts,jsx,tsx}", // from the second config
//     "./src/**/*.{ts,tsx}", // from the first config
//   ],
//   darkMode: "class", // from the first config
//   theme: {
//     extend: {
//       colors: {
//         // colors from the second config
//         "primary": "#141414",
//         "navy": "#172554",
//         "specialtext": "#fcd34d",
//       },
//       animation: {
//         // animation from the first config
//         aurora: "aurora 60s linear infinite",
//       },
//       keyframes: {
//         // keyframes from the first config
//         aurora: {
//           from: {
//             backgroundPosition: "50% 50%, 50% 50%",
//           },
//           to: {
//             backgroundPosition: "350% 50%, 350% 50%",
//           },
//         },
//       },
//     },
//   },
//   plugins: [
//     // add global CSS variables for colors from the first config
//     addVariablesForColors,
//   ],
// };

// // This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
// function addVariablesForColors({ addBase, theme }) {
//   let allColors = flattenColorPalette(theme("colors"));
//   let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

//   addBase({
//     ":root": newVars,
//   });
// }

// import svgToDataUri from "mini-svg-data-uri";
// import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

// /** @type {import('tailwindcss').Config} */
// export const content = [
//   "./index.html", // from the second config
//   "./src/**/*.{js,ts,jsx,tsx}", // merged content from both configs
// ];
// export const darkMode = "class";
// export const theme = {
//   extend: {
//     colors: {
//       // colors from the second config
//       "primary": "#141414",
//       "navy": "#172554",
//       "specialtext": "#fcd34d",
//     },
//     animation: {
//       // animation from the first config
//       aurora: "aurora 60s linear infinite",
//     },
//     keyframes: {
//       // keyframes from the first config
//       aurora: {
//         from: {
//           backgroundPosition: "50% 50%, 50% 50%",
//         },
//         to: {
//           backgroundPosition: "350% 50%, 350% 50%",
//         },
//       },
//     },
//   },
// };
// export const plugins = [
//   // add global CSS variables for colors from the first config
//   addVariablesForColors,
//   function ({ matchUtilities, theme }) {
//     matchUtilities({
//       "bg-dot-thick": (value) => ({
//         backgroundImage: `url("${svgToDataUri(
//           `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
//         )}")`,
//       }),
//     }, { values: flattenColorPalette(theme("backgroundColor")), type: "color" });
//   },
// ];

// // This plugin adds each Tailwind color as a global CSS variable, e.g., var(--gray-200).
// function addVariablesForColors({ addBase, theme }) {
//   let allColors = flattenColorPalette(theme("colors"));
//   let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

//   addBase({
//     ":root": newVars,
//   });
// }

const svgToDataUri = require("mini-svg-data-uri");
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette").default;
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#141414",
        "navy": "#172554",
        "specialtext": "#fcd34d",
        ...colors,
      },
      animation: {
        aurora: "aurora 60s linear infinite",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: "50% 50%, 50% 50%" },
          to: { backgroundPosition: "350% 50%, 350% 50%" },
        },
        scroll: {
          to: { transform: "translate(calc(-50% - 0.5rem))" },
        },
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities({
        "bg-dot-thick": (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
          )}")`,
        }),
      }, { values: flattenColorPalette(theme("backgroundColor")), type: "color" });
    },
  ],
};

function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}
