const {colors} = require('tailwindcss/defaultTheme');

module.exports = {
    theme: {
        screens: false,
        colors: {
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            red: colors.red,
            yellow: colors.yellow,
            orange: colors.orange,
            green: colors.green,
            blue: {
                '100': '#E1EBFF',
                '200': '#C4D6FD',
                '300': '#9AB9FB',
                '400': '#6B9AFC',
                '500': '#3D7BFE',
                '600': '#2962DB',
                '700': '#2F59B1',
                '800': '#1E3F83',
                '900': '#082560',
            },
            purple: colors.purple,
        },
        extend: false
    },
    variants: false,
    plugins: [],
    corePlugins: {
        outline: false,
        pointerEvents: false,
    }
};
