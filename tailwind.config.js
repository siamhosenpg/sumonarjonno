/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#FBF3EF',
        ink: '#3A0E17',
        wine: '#7A1F2B',
        rose: '#B23A48',
        blush: '#F3CFC6',
        petal: '#EFA8A0',
        gold: '#C89B5A',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        body: ['var(--font-jost)', 'sans-serif'],
        script: ['var(--font-parisienne)', 'cursive'],
      },
      backgroundImage: {
        'paper-texture':
          "radial-gradient(circle at 20% 20%, rgba(178,58,72,0.05), transparent 40%), radial-gradient(circle at 80% 60%, rgba(200,155,90,0.08), transparent 45%)",
      },
    },
  },
  plugins: [],
};
