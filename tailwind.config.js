/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,scss,css}",     // Đường dẫn đến các file trong thư mục pages
      "./styles/**/*.{js,ts,jsx,tsx,scss,css}", // Đường dẫn đến các file trong thư mục components
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }