/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "primary": {
          100: "#B71C1C",
          80: "#E13D3D",
          110: "#8E1616",
          120: "#741212",
        },
        "secondary": {
          100: "#00796B",
          80: "#06A390",
          110: "#006055",
          120: "#00463E",
        },
        "accent": {
          100: "#FFBF00",
          80: "#FFCD37",
          110: "#EDB200",
          120: "#D19D00",
        },
        "light": {
          100: "#F5F5F5",
          80: "#FAFAFA",
          120: "#E4E3E3",
        },
        "dark": {
          100: "#000000",
          80: "#484848",
          60: "#827F7F",
        }
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
