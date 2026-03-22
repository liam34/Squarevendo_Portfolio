/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#3b82f6',
        'primary-dark': '#2563eb',
        'text-dark': '#2d2d2d',
        'text-light': '#4a4a4a',
        'text-muted': '#7a7a7a',
        'bg-dark': '#f5f5f1',
        'bg-card': '#ffffff',
      },
      maxWidth: {
        'container': '1200px',
      }
    },
  },
  plugins: [],
}
