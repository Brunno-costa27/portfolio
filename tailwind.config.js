/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx, html}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F1624",
        primatyGradiente: {
          DEFAULT: "linear-gradient(to right, #13ADC7, #6978D1, #945DD6)",
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Definindo Poppins como a fonte sans-serif
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      screens: {
        'xs': '480px',  // Adicionando um breakpoint personalizado para telas menores
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(100px)' },
          '100%': { opacity: '1', transform: 'translateY(10px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
      },
    },
  },
  plugins: [
    
  ],
}

