/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                Exo: ['Exo', 'sans-serif'],
                Mulish: ['Mulish', 'sans-serif'],
                Rubik: ['Rubik', 'sans-serif'],

            },
        },
    },
    plugins: [],
}

