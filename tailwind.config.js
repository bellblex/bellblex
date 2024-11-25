const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./mdx-components.tsx",
    "content/**/*.mdx",
  ],
  theme: {
    extend: {
		typography: {
			DEFAULT: {
			  css: {
				"code::before": {
				  content: '""',
				},
				"code::after": {
				  content: '""',
				},
			  },
			},
		  },
		  fontFamily: {
			sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
			display: ["var(--font-calsans)"],
		  },
      backgroundImage: {
        "gradient-light":
          "linear-gradient(135deg, #FAF3E0, #FFF8DC, #F5DEB3)",
        "gradient-dark":
          "linear-gradient(135deg, #1E293B, #2D3748, #4A5568)", 
      },
      colors: {
		"light-bg": "#FAF3E0", // Light theme background color
        "dark-bg": "#1E293B", // Dark theme background color
        "star-light": "#FFD700", // Gold-like star color
        "star-dark": "#FFFFFF", // White stars
        "light-accent": "#F5DEB3", // Warm beige
        "dark-accent": "#4A5568", // Subtle dark gray
      },
	  animation: {
        "fade-in": "fade-in 1.5s ease-in-out forwards",
		'fade-in-up': 'fade-in-up 1.5s ease-out', // Animation duration of 1.5s
        title: "title 3s ease-out forwards",
        "fade-left": "fade-left 3s ease-in-out forwards",
        "fade-right": "fade-right 3s ease-in-out forwards",
      },
      keyframes: {
		'fade-in-up': {
			'0%': {
			  opacity: '0',
			  transform: 'translateY(20px)', // Start below
			},
			'100%': {
			  opacity: '1',
			  transform: 'translateY(0)', // End in the original position
			},
		},
        "fade-in": {
          "0%": {
            opacity: "0%",
          },
          "75%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "fade-left": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0%",
          },
          "30%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        "fade-right": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0%",
          },
          "30%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        title: {
          "0%": {
            "line-height": "0%",
            "letter-spacing": "0.25em",
            opacity: "0",
          },
          "25%": {
            "line-height": "0%",
            opacity: "0%",
          },
          "80%": {
            opacity: "100%",
          },
          "100%": {
            "line-height": "100%",
            opacity: "100%",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-debug-screens"),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#1E293B",
          secondary: "#71717A", 
          accent: "#FFD700", // Gold
          neutral: "#F0ECE2", // Soft neutral
          "base-100": "#FAF3E0", // Off-white background
          info: "#5F99F7",
          success: "#4ADE80",
          warning: "#EAB308",
          error: "#F87171",
        },
        dark: {
          primary: "#FFFFFF", 
          secondary: "#71717A", 
          accent: "#FFD700",
          neutral: "#1A202C",
          "base-100": "#1E293B", 
          info: "#3B82F6",
          success: "#10B981",
          warning: "#F59E0B",
          error: "#EF4444",
        },
      },
    ],
  },
};
