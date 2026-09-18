/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],

  safelist: [
    // AreaChart colors
    "stroke-red-500",
    "stroke-blue-500",
    "stroke-indigo-500",
    "stroke-cyan-500",

    "fill-red-500",
    "fill-blue-500",
    "fill-indigo-500",
    "fill-cyan-500",

    // DonutChart colors
    "fill-violet-500",
    "fill-amber-500",
    "fill-emerald-500",
  ],

  theme: {
    extend: {},
  },

  plugins: [],
}