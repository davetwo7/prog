import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'satoshi': ['Satoshi-Variable', 'sans-serif'], // Assuming you want to use the variable font for all weights.
      },
      fontWeight: {
        'light': "300",
        'regular': "400",
        'medium': "500",
        'bold': "700",
        'black': "900",
      },
    },
  },
  plugins: [],
};
export default config;
