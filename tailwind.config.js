/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/*/.blade.php",
      "./src/*/.js",
      "./src/*/.vue"
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
      }
    },
    plugins: [],
  }