import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        background1:'#131925',
        borderGrey1:'#3B4B5D',
         textGrey1:'#616875',
      },
      screens:{
        lg:'1200px',
        xsm:'400px'
      }
    },
  },
  plugins: [],
};
export default config;
