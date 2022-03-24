module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner01: "url('/images/demobanner01.jpg')",
        banner02: "url('/images/demobanner02.jpg')",
        banner03: "url('/images/demobanner03.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      // padding: {
      // 	13: '3.25rem',
      // },
    },
  },
  plugins: [],
};
