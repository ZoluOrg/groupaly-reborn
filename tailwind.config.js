/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        core: {
          bg: "#1f1516",
          upper: "#bf5f6a",
        },
      },
    },
    fontFamily: {
      sans: ["Satoshi"],
    },
  },
  plugins: [],
};
