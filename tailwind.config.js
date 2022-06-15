module.exports = {
  content: [
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      backgroundImage:{
        'hero-image':'url("/images/towing-1.jpg")',
        'services-list' : 'url(/images/all-service-bg.jpg)',
        'cta' : 'linear-gradient(rgba(0, 0, 0, 0.564), rgba(0, 0, 0, 0.527)),url(/images/tags-bg.jpg)'
      },
      gridTemplateColumns:{
        'service-item': '30px 1fr',
      },
    },
  },
  plugins: [
]
}