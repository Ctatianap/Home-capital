const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    important: true,
    purge: ['./resources/**/*.php', './resources/**/*.vue'],
    theme: {
        fontSize: {
            xs: '0.75rem', // 12px
            sm: '0.875rem',// 14px
            base: '1rem',// 16px
            lg: '1.125rem',// 18px
            xl: '1.25rem',// 20px
            '2xl': '1.5rem', //24px
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '4.5rem',
            '8xl': '6rem',
        },
        minWidth: {
            0: '0',
            '1/4': '25%',
            '1/3': '33.3333333%',
            '1/2': '50%',
            '3/4': '75%',
            full: '100%',
        },
        minHeight: {
            0: '0',
            100: '100px',
            300: '300px',
            full: '100%',
            screen: '100vh',
        },
        maxHeight: {
            0: '0',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            full: '100%',
            screen75: '75vh',
            screen: '100vh',
        },
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            display: ['Roboto', 'sans-serif'],
            body: ['Roboto', 'sans-serif'],
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1280px',
            xl: '1600px',
            print: { raw: 'print' },
        },
        extend: {
            boxShadow: {
                xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
                outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
            },
            spacing: {
                14: '3.5rem',
                28: '7rem',
                52: '13rem',
                72: '18rem',
                80: '20rem',
                84: '21rem',
                96: '24rem',
                112: '28rem',
                128: '32rem',
                134: '36.500rem',
                140: '41.875rem',
                145: '45.875rem',
                150: '50rem',
            },
            colors: {
                gray: {
                    DEFAULT: '#212121',
                    // 1: '#212121',
                    2: '#666666',
                    3: '#A1A1A1',
                    4: '#FAFAFA',
                    // 300: '#E2E8F0',
                    darker: '#606f7b',
                    darkest: '#3d4852',
                    light: '#dae1e7',
                    lighter: '#f1f5f8',
                },
                transparent: 'transparent',
                black: '#22292f',
                blue: '#3490dc',
                red: { DEFAULT: '#E3342F', lightest: '#FCEBEA' },
                pink: '#DE1C7D',
                // 'grey-dark': '#8795a1',
                // grey: '#b8c2cc',
                indigo: {
                    DEFAULT: '#002D85',
                },
                primary: {
                    DEFAULT: '#1A237E',
                    // 1: '#1A237E',
                    2: '#9FA8DA',
                    3: '#E8EAF6',
                },
                secondary: {
                    DEFAULT: '#DE1C7D',
                    // 1: '#E91E63',
                    2: '#D65595',
                    3: '#FFFBFC',
                },
                success: {
                    DEFAULT: '#8BC34A',
                    // 1: '#8BC34A',
                    2: '#C5E1A5',
                    3: '#F1F8E9',
                },
                info: {
                    DEFAULT: '#2196F3',
                    // 1: '#2196F3',
                    2: '#90CAF9',
                    3: '#E3F2FD',
                },
                warning: {
                    DEFAULT: '#FF8F00',
                    // 1: '#FF8F00',
                    2: '#FFD54F',
                    3: '#FFF8E1',
                },
                danger: {
                    DEFAULT: '#F44336',
                    // 1: '#F44336',
                    2: '#E57373',
                    3: '#FFCDD2',
                },
                orangelight: {
                    DEFAULT: '#ffddc2',
                    // 1: '#F44336',
                    2: '#ff7b12',
                    3: '#ffddc2',
                },
                custom: {
                    indigo: '#E7EBF3',
                    gray: '#F8FAFC',
                },
            },
            margin: {
                96: '24rem',
                128: '32rem',
            },
            borderRadius: {
                xl: '1.2rem',
                1: '1rem',
            },
        },
        boxShadow: {
            DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, .25), 0 1px 2px 0 rgba(0, 0, 0, .06)',
            md: ' 0 4px 6px -1px rgba(0, 0, 0, .25), 0 2px 4px -1px rgba(0, 0, 0, .06)',
            lg: ' 0 10px 15px -3px rgba(0, 0, 0, .25), 0 4px 6px -2px rgba(0, 0, 0, .05)',
            xl: ' 0 20px 25px -5px rgba(0, 0, 0, .25), 0 10px 10px -5px rgba(0, 0, 0, .04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, .5)',
            pink: '5px 5px 20px 1px rgba(233, 30, 99, 0.5)',
            'pink-light': '5px 5px 20px 1px rgba(233, 30, 99, 0.3)',
            indigo: '5px 5px 20px 1px rgba(39, 51, 76, 0.5)',
            'indigo-light': '5px 5px 20px 1px rgba(39, 51, 76, 0.3)',
            green: '5px 5px 20px 1px rgba(163,189,49, 0.5)',
            'green-light': '5px 5px 20px 1px rgba(163,189,49, 0.3)',
            white: '5px 5px 20px 1px rgba(255, 255, 255, 0.5)',
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, .3)',
            inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
            focus: '0 0 0 3px rgba(66,153,225,0.5)',
            none: 'none',
        },
        zIndex: {
            0: 0,
            10: 10,
            20: 20,
            30: 30,
            40: 40,
            50: 50,
            3000: 3000,
            3001: 3001,
            3500: 3500,
            3501: 3501,
            auto: 'auto',
        },
    },
    variants: {
        opacity: ['responsive', 'hover', 'group-hover'],
        borderWidth: ['responsive', 'hover', 'focus'],
        visibility: ['group-hover'],
        fontSize: ['responsive', 'hover', 'focus'],
        zIndex: ['responsive', 'hover', 'focus'],
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
        backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    margin: '0 auto',
                    '@screen lg': {
                        maxWidth: '1240px',
                    },
                    '@screen xl': {
                        maxWidth: '1600px',
                    },
                },
            })
        },
    ],
}
