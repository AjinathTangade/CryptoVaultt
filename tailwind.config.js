/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [keepPreset],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': {transform: 'rotateY(45deg)'},
          '100%': {transform: 'rotateY(225deg)'},
        }
      }

    },
  },
  plugins: [],
}