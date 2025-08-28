import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Safari Brand Colors
				safari: {
					charcoal: 'hsl(var(--safari-charcoal))',
					ochre: 'hsl(var(--safari-ochre))',
					green: 'hsl(var(--safari-green))',
					sand: 'hsl(var(--safari-sand))',
					ivory: 'hsl(var(--safari-ivory))'
				}
			},
			fontFamily: {
				display: ['Playfair Display', 'Georgia', 'serif'],
				body: ['Inter', 'system-ui', 'Arial', 'sans-serif'],
				sans: ['Inter', 'system-ui', 'Arial', 'sans-serif'], // default
			},
			fontSize: {
				'hero': ['clamp(2.5rem, 8vw, 6rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
				'display': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				card: 'var(--radius-card)',
				hero: 'var(--radius-hero)'
			},
			boxShadow: {
				safari: 'var(--shadow-safari)',
				'safari-card': 'var(--shadow-card)',
				'safari-floating': 'var(--shadow-floating)',
			},
			backgroundImage: {
				'gradient-sunset': 'var(--gradient-sunset)',
				'gradient-landscape': 'var(--gradient-landscape)',
				'gradient-wildlife': 'var(--gradient-wildlife)',
				'gradient-hero-overlay': 'var(--gradient-hero-overlay)',
			},
			animation: {
				'safari-fade-in': 'safari-fade-in 0.8s ease-out',
				'safari-slide-up': 'safari-slide-up 0.6s ease-out',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			keyframes: {
				'safari-fade-in': {
					from: {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'safari-slide-up': {
					from: {
						opacity: '0',
						transform: 'translateY(40px) scale(0.95)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
