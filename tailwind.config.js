/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/(tabs)/**/*.{js,jsx,ts,tsx}",
    "./<custom_folders>/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #d41116 0%, #6a0927 100%)",
      },
    },
  },
  plugins: [],
};
