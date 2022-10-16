module.exports = {
  mode: "jit",
  content: ["./src/**/*.js"],
  safelist: ["is-active", "max-w-full", 'max-w-screen-md', 'mx-auto'],
  theme: {
    fontSize: {
      "2xs": "1.4rem",
      xs: "1.6rem",
      sm: "1.8rem",
      base: "2rem",
      lg: "2.2rem",
      xl: "2.4rem",
      "2xl": "3rem",
      "3xl": "3.4rem",
      "4xl": "4rem",
      "5xl": "5rem",
      "6xl": "6rem",
      "7xl": "7rem",
      "8xl": "8rem",
      "9xl": "9rem",
      "10xl": "10rem",
    },
    screens: {
      "2xs": "375px",
      xs: "480px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1600px",
      "4xl": "1900px",
    },
    extend: {
      fontFamily: {
        riverside: ["Riverside", "Impact", "sans-serif"],
        "riverside-outline": ["Riverside Outline", "Impact", "sans-serif"],
        krete: ["Krete", "Georgia", "serif"],
        mono: ['Courier', 'monospace']
      },
      colors: {
        butterscotch: {
          DEFAULT: "#FAB944",
          50: "#FFFCF7",
          100: "#FEF4E3",
          200: "#FDE6BB",
          300: "#FCD793",
          400: "#FBC86C",
          500: "#FAB944",
          600: "#F9A50D",
          700: "#C88305",
          800: "#925F04",
          900: "#5B3B02",
        },
        tuscany: {
          DEFAULT: "#D05C32",
          50: "#F2D3C7",
          100: "#EEC6B7",
          200: "#E7AB96",
          300: "#DF9174",
          400: "#D87653",
          500: "#D05C32",
          600: "#A44726",
          700: "#77331B",
          800: "#492011",
          900: "#1B0C06",
        },
        navy: {
          DEFAULT: "#1B1D3C",
          50: "#5A5FB5",
          100: "#4E53AD",
          200: "#414690",
          300: "#343874",
          400: "#282B58",
          500: "#1B1D3C",
          600: "#0A0A15",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        seashell: {
          DEFAULT: "#fff4e8",
        },
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
        30: "30",
        40: "40",
        50: "50",
        60: "60",
      },
    },
  },
  corePlugins: {
    container: false,
  },
}
