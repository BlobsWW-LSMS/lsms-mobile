/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./App.tsx",
      "./app/**/*.{js,jsx,ts,tsx}",
      "./src/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
    ],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
        colors: {
          brand: {
            50: "#edf7f1",
            100: "#d0eedd",
            200: "#a4ddbc",
            300: "#78cb9a",
            400: "#50b97d",
            500: "#329f61",
            600: "#237e4b",
            700: "#185f38",
            800: "#0f3f25",
            900: "#082112",
          },
        },
      },
    },

    plugins: [],
  };

