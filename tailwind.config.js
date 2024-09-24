/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2b3137',
        secondary: '#24292e',
        accent: '#28eea7e6',
      },
      maxHeight: {
        '0': '0',
        'screen': '100vh',
      },
      transitionProperty: {
        'height-opacity-transform': 'max-height, opacity, transform',
      },
      spacing: {
        '10': '-10px',
        '190': '-190px',
      }
    },
  },
};
