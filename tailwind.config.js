/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}", "./src/app/components/**/*.{js,ts,jsx,tsx}"],
    darkMode: ['selector', '[data-theme="dark"]'],
    theme: {
      extend: {
        fontFamily: {
          sans: "InterDisplay",
          mono: ["var(--font-jbm)"],
        },
        colors: {},
        boxShadow: {
          'mae': '0px 2px 32px 8px rgba(133, 72, 245, 0.1)'
        }
      },
    },
    plugins: [
    ],
  };