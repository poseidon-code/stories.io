const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./src/**/*.js', './public/index.html'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            sans: ['Source Sans Pro', 'sans-serif'],
            serif: ['Sansita Swashed', 'cursive'],
        },
        extend: {
            colors: {
                gray: colors.gray,
                blue: colors.cyan,
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
            pointerEvents: ['disabled'],
        },
    },
    plugins: [],
}
