module.exports = {
    content: [
        './src/**/*.{html, css, js}',
        './*.html',
        './node_modules/tw-elements/dist/js/**/*.js'
    ],
    theme: {
        "fontFamily": {
            "Rubik": ["Rubik", "sans-serif"],
            "Ubuntu": ["Ubuntu", "serif"],
        },
        extend: {
            colors: {
                primary: {
                    900: '#1976bc',
                    800: '#2c7fb8',
                    700: '#3c85c6',
                    600: '#4a92d2',
                    500: '#569cd6',
                    400: '#639dd2',
                    300: '#70a2ce',
                    200: '#7ea8cb',
                    100: '#8cb4c8',
                    50: '#d8e5eb',
                },
            },
            animation: {
                "up-down": 'up-down 3s ease-in-out infinite',
            },
            keyframes: {
                "up-down": {
                    '0%, 100%': { transform: 'translateY(-5px)' },
                    '50%': { transform: 'translateY(5px)' },
                },
            }
        },
    },
    plugins: [],
}
