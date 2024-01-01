/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(54, 81, 94, 0.8)",
          "0 0px 65px rgba(54, 81, 94, 0.58)",
        ],
        glowWhite: [
          "0 0px 20px rgba(255, 255, 255, 0.8)",
          "0 0px 65px rgba(255, 255, 255, 0.58)",
        ],
      },
      backgroundImage: {
        hero: "url('/src/assets/background-hero.webp')",
      },
    },
  },
  plugins: [],
};
