import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        's':'320px',
        'sm':'640px',
        'l':'1280px',
        'xl':'1440px',
        'xx':'1660px',
        'xxl':'1920px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      
      
     
     
    },
  },
  plugins: [],
};
export default config;
