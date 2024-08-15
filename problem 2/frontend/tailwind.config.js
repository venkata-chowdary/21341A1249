module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'dark-background': '#1a1a2e',
        'dark-card': '#16213e',
        'dark-text': '#e0e0e0',
        'dark-accent': '#ff9900',
        'light-background': '#f5f5f5',
        'light-card': '#ffffff',
        'light-text': '#333333',
        'primary': '#ff9900',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
};
