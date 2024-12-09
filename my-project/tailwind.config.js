module.exports = {
  content: [
    "./src/**/*.{html,js,css}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'creepster': ['Creepster', 'cursive']
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        halloween: {
          "primary": "#8b0000",     // Rosso scuro sangue
          "secondary": "#ff4500",   // Arancione zucca
          "accent": "#9400d3",      // Viola mistico
          "neutral": "#1a1a1a",     // Nero notte
          "base-100": "rgba(250,209,155,0.9)", // Beige caldo
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272"
        }
      }
    ]
  }
};