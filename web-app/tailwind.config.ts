import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '0.618rem',
        base: '1rem',
        xl: '1.618rem',
        '2xl': '2.618rem',
        '3xl': '4.236rem',
        '4xl': '6.854rem',
        '5xl': '11.090rem'
      },
      fontFamily: {
        heading: 'Schoolbell',
        body: 'Lexend'
      },
      fontWeight: {
        normal: '400',
        bold: '700'
      },
      colors: {
        text: 'var(--text)',
        background: 'var(--background)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        warning: 'var(--warning)',
        success: 'var(--success)',
        error: 'var(--error)',
        info: 'var(--info)', 
      }
    }
  },
  plugins: []
} satisfies Config;
