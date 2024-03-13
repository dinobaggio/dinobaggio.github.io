/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{vue,js}"
    ],
    colors: [],
    theme: {
      extend: {
        colors: {
          darkblue: "#2D4181", // #2D4181, #2E47BA
          lightblue: "#F7F8FC",
          primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
        }
      },
      fontFamily: {
        'body': ["Poppins"],
        'sans': ["Poppins"]
      },
      fontSize: {
        h1: '3.815rem',
        h2: '3.052rem',
        h3: '2.441rem',
        h4: '1.953rem',
        h5: '1.563rem',
        h6: '1.25rem',
        p: '1rem',
        small: '0.8rem',
        xsmall: '0.64rem'
      },
    },
    plugins: [],
  }