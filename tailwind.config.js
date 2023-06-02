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
        cream: {
          n1: "#aba89e",
          n2: "#c3c0b4",
          n3: "#dcd8cb",
          base: "#f4f0e1",
        },
        accent: {
          n1: "#e6b300",
          n2: "#b38b00",
          n3: "#997700",
          base: "#FFC700",
          p1: "#ffcd1a",
          p2: "#ffd233",
          p3: "#ffd84d",
        },
      },
    },
  },
  plugins: [],
};
