/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '375px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
        '2xl': '1920px',
        '3xl': '2560px',
      },
      maxWidth: {
        '8xl': '1920px',
        '9xl': '2560px',
      },
      gridTemplateColumns: {
        'auto-fill-24': 'repeat(auto-fill, minmax(24px, 1fr))',
      },
      colors: {
        primary: {
          light: '#f43f5e', // warm pink
          dark: '#3b82f6',  // cool blue
        },
        secondary: {
          light: '#fb7185', // warm pink-red
          dark: '#60a5fa',  // cool light-blue
        },
        background: {
          light: '#fff1f2', // warm pink bg
          dark: '#0f172a',  // cool dark bg
        },
        text: {
          light: '#1f2937', // dark gray
          dark: '#f1f5f9',  // light gray
        }
      }
    },
  },
  
  plugins: [],
}