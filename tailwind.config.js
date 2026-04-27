const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    darkMode: ["class"],
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
  					'code::before': {
  						content: '"'
  					},
  					'code::after': {
  						content: '"'
  					}
  				}
  			}
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-inter)',
                    ...defaultTheme.fontFamily.sans
                ],
  			display: [
  				'var(--font-calsans)'
  			]
  		},
  		backgroundImage: {
  			'gradient-light': 'radial-gradient(circle at 14% 18%, rgba(37, 99, 235, 0.16), transparent 26%), radial-gradient(circle at 82% 12%, rgba(249, 115, 22, 0.14), transparent 24%), linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 44%, #FFF7ED 100%)',
  			'gradient-dark': 'radial-gradient(circle at 12% 20%, rgba(56, 189, 248, 0.18), transparent 26%), radial-gradient(circle at 86% 18%, rgba(250, 204, 21, 0.12), transparent 22%), linear-gradient(135deg, #020617 0%, #111827 46%, #18181B 100%)'
  		},
  		animation: {
  			'fade-in': 'fade-in 1.5s ease-in-out forwards',
  			'fade-in-up': 'fade-in-up 1.5s ease-out',
  			title: 'title 3s ease-out forwards',
  			'fade-left': 'fade-left 3s ease-in-out forwards',
  			'fade-right': 'fade-right 3s ease-in-out forwards'
  		},
  		keyframes: {
  			'fade-in-up': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'fade-in': {
  				'0%': {
  					opacity: '0%'
  				},
  				'75%': {
  					opacity: '0%'
  				},
  				'100%': {
  					opacity: '100%'
  				}
  			},
  			'fade-left': {
  				'0%': {
  					transform: 'translateX(100%)',
  					opacity: '0%'
  				},
  				'30%': {
  					transform: 'translateX(0%)',
  					opacity: '100%'
  				},
  				'100%': {
  					opacity: '0%'
  				}
  			},
  			'fade-right': {
  				'0%': {
  					transform: 'translateX(-100%)',
  					opacity: '0%'
  				},
  				'30%': {
  					transform: 'translateX(0%)',
  					opacity: '100%'
  				},
  				'100%': {
  					opacity: '0%'
  				}
  			},
  			title: {
  				'0%': {
  					'line-height': '0%',
  					'letter-spacing': '0.25em',
  					opacity: '0'
  				},
  				'25%': {
  					'line-height': '0%',
  					opacity: '0%'
  				},
  				'80%': {
  					opacity: '100%'
  				},
  				'100%': {
  					'line-height': '100%',
  					opacity: '100%'
  				}
  			}
  		},
  	}
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-debug-screens"),
    require("daisyui"),
      require("tailwindcss-animate")
],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#1E293B",
          secondary: "#4B5563",
          accent: "#2563EB",
          neutral: "#F8FAFC",
          "base-100": "#F8FAFC",
          info: "#5F99F7",
          success: "#4ADE80",
          warning: "#EAB308",
          error: "#F87171",
        },
        dark: {
          primary: "#FFFFFF",
          secondary: "#9CA3AF",
          accent: "#38BDF8",
          neutral: "#111827",
          "base-100": "#020617", 
          info: "#3B82F6",
          success: "#10B981",
          warning: "#F59E0B",
          error: "#EF4444",
        },
      },
    ],
  },
};
