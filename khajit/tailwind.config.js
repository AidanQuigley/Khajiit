/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      cardinal: '#C42847',
      rustyred: '#DE3C4B',
      snow: '#FBF5F3',
      snowdarker: '#F5E6E0',
      jet: '#2A2B2A',
      jetdarker: '#1E1F1E',
      black: '#000000'
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
