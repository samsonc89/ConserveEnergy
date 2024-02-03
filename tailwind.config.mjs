/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        "2xl": "0 4px 28px 0px #00000026",
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
      animation: {
        marquee: "marquee 20s linear infinite",
        marquee2: "marquee2 20s linear infinite",
        // ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite,"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        // ping: {
        //   "75%": {
        //     transform: "scale(1)",
        //     opacity: "0"
        //   },
        //   "100%": {
        //     transform: "scale(2)",
        //     opacity: "0"
        //   },
        // },
      },
    },
  },
};
