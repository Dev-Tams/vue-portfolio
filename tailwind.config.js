/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        smm: '320px', // 👈 your custom screen
      },
      backgroundColor: {
       grey: 'hsla(0, 0%, 100%, 0.08)',
    }
    },
  plugins: [],
}
}

