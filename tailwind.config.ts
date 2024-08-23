import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#495057",
          200 : '#49454F',
        },
        customWhite : {
          500 : '#9B9B9B75',
          600 :'#FFFFFFA6',
        },
        green : {
          500 : '#70C23E'
        }
      },
    },
  },
  plugins: [],
};

export default config;
