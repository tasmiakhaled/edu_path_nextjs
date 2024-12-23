/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: 'rgba(153, 152, 225, 0.2)',
        borderBlue: "rgba(153, 152, 225, 0.5)"
      },
      screens: {
        xs: "300px", 
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
      themes: [
        {
          mytheme: {
            "primary": "#287279",
            "secondary": "#f6d860",
            "accent": "#37cdbe",
            "neutral": "#3d4451",
            "base-100": "#ffffff",
          },
        },
        "dark",
        "cupcake",
      ],
    },
};
