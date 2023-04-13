import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "outrageous-orange": {
          "50": "#fff2ed",
          "100": "#ffe1d4",
          "200": "#ffbfa8",
          "300": "#ff9371",
          "400": "#ff5733",
          "500": "#fe3111",
          "600": "#ef1707",
          "700": "#c60b08",
          "800": "#9d0f12",
          "900": "#7e1012",
          "950": "#44060a",
        },
      },
      keyframes: {
        "menu-slide-in":{
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        "menu-slide-out":{
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        "menu-slide-in": 'menu-slide-in 0.5s ease-out forwards',
        "menu-slide-out": 'menu-slide-out 0.5s ease-out forwards'
      }
    },
  },
  plugins: [],
} satisfies Config;
