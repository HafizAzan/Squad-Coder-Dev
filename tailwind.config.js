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
        background: "black",
        foreground: "green",
      },
      fontFamily: {
        inherit: "inherit",
      },
      aspectRatio: {
        custom: "1/1.3",
      },
    },
  },
  plugins: [],
};
