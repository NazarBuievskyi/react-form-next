/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                latoBold: 'LatoBold',
                latoReg: 'LatoRegular',
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}