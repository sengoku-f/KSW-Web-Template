// Example `tailwind.config.js` file

module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,md,html}'],
    theme: {
        extend: {
            colors: {
                // 自定义颜色
                'k-main': {
                    500: '#FF5500'
                },
                'blue': {
                    '50': '#f2fbff',
                    '100': '#e6f6ff',
                    '200': '#bfe4ff',
                    '300': '#99cfff',
                    '400': '#4f9bff',
                    '500': '#0256ff',
                    '600': '#024ae6',
                    '700': '#0238bf',
                    '800': '#022a99',
                    '900': '#001b73',
                    '950': '#00104a'
                },
                'gray': {
                    '50': '#f7f9fa',
                    '100': '#edf0f2',
                    '200': '#d7dde0',
                    '300': '#c0c6cc',
                    '400': '#949ba6',
                    '500': '#6b7280',
                    '600': '#576073',
                    '700': '#3b455e',
                    '800': '#26304d',
                    '900': '#151d38',
                    '950': '#090e24'
                },
                'green': {
                    '50': '#f2fcf9',
                    '100': '#e6faf3',
                    '200': '#bdf0dc',
                    '300': '#9be8c6',
                    '400': '#5ad694',
                    '500': '#22c55e',
                    '600': '#1ab04f',
                    '700': '#13943c',
                    '800': '#0c752b',
                    '900': '#07591d',
                    '950': '#03380f'
                },
                'red': {
                    '50': '#fffaf5',
                    '100': '#fcf3eb',
                    '200': '#fce0cf',
                    '300': '#fac7b1',
                    '400': '#f58d7a',
                    '500': '#ef4444',
                    '600': '#d93636',
                    '700': '#b32525',
                    '800': '#8f1818',
                    '900': '#6b0e0e',
                    '950': '#450606'
                },
                'oranger': {
                    '50': '#fffbf2',
                    '100': '#fff8e8',
                    '200': '#ffe9c4',
                    '300': '#fcd8a2',
                    '400': '#fcac5b',
                    '500': '#f97316',
                    '600': '#e06512',
                    '700': '#ba4d0d',
                    '800': '#963708',
                    '900': '#702504',
                    '950': '#471502'
                },
                'yellow': {
                    '50': '#fffdf2',
                    '100': '#fcf9e3',
                    '200': '#faf1be',
                    '300': '#f7e797',
                    '400': '#f0cc4d',
                    '500': '#eab308',
                    '600': '#d49906',
                    '700': '#b07404',
                    '800': '#8c5503',
                    '900': '#693a01',
                    '950': '#452201'
                }
            },
            height: {
                192: '48rem'
            }
        },
        fontFamily: {
            yk: 'YouSheBiaoTiHei'
        },
        screens: {
            mobile: '375px',
            // => @media (min-width: 375px) { ... }
            sm: '640px',
            // => @media (min-width: 640px) { ... }
            md: '768px',
            // => @media (min-width: 768px) { ... }
            lg: '1024px',
            // => @media (min-width: 1024px) { ... }
            xl: '1280px',
            // => @media (min-width: 1280px) { ... }
            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
            '3xl': '1920px'
            // => @media (min-width: 1536px) { ... }
        }
    }
    // plugins: [require('tailwind-scrollbar-hide')]
}
