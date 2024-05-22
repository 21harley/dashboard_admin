import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Asegúrate de que estas rutas reflejan tu estructura de proyecto
    './public/**/*.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        primary: "hsl(212, 59%, 56%)",
        secondary:"hsl(22, 100%, 47%)"
      }
    },
    
  },
  plugins: [],
};
export default config;
