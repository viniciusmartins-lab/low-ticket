/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
          light: 'var(--color-primary-light)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          dark: 'var(--color-secondary-dark)',
          light: 'var(--color-secondary-light)',
        },
        neutral: {
          900: 'var(--color-neutral-900)',
          700: 'var(--color-neutral-700)',
          400: 'var(--color-neutral-400)',
          100: 'var(--color-neutral-100)',
          white: 'var(--color-neutral-white)',
        },
        success: 'var(--color-success)',
        error: 'var(--color-error)',
        black: 'var(--color-black)',
      },
      fontFamily: {
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1-desk': ['3rem', { lineHeight: '1.2' }],
        'h1-mobile': ['2rem', { lineHeight: '1.2' }],
        'h2-desk': ['2.25rem', { lineHeight: '1.3' }],
        'h2-mobile': ['1.625rem', { lineHeight: '1.3' }],
        'h3-desk': ['1.5rem', { lineHeight: '1.4' }],
        'h3-mobile': ['1.25rem', { lineHeight: '1.4' }],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        card: '0 4px 16px rgba(29, 22, 0, 0.10)',
      },
    },
  },
  plugins: [],
}
