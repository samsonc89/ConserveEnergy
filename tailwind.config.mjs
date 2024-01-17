/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px 30px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        green: "#247B46",
        "caption-color": "#E06127",
        "title-color": "#111211",
        "body-color": "#3A3A3A",
        bone: "#F9F6EE",
        gray: "#9c9c9c",
        white: "#FFFFFF",
      },
    },
  },
};
