/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: { lightBlue: '#2951FE', lightGray: 'gray-300' },
            backgroundColor: { mainBg: '#FFFFFF' },
            height: { maxHeight: '1080px' },
            margin: { marginLeft: 'ml-16' },
        },
    },
    plugins: [],
}
