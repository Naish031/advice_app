

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/backgroundImage.png')",
        "second-pattern":"url('/secondBackgroundImage.png')",
      },
    },
  },
  plugins: [
  ],
};
