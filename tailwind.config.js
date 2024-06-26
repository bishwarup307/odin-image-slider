/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
            dxl: "1980px",
        },
        extend: {
            backgroundImage: {
                hero: "url('/src/assets/hero.png')",
            },
            fontFamily: {
                // Add your fonts
                sans: ["Inter", "sans-serif"],
                fa: "Font Awesome 5 Free",
            },
            colors: {
                // Add your custom colors
                textPrimary: "hsl(197, 94%, 10%)", // 	#022431
                bgPrimary: "hsl(211, 70%, 20%)",
                accent: "hsl(196, 24%, 46%)",
                "accent-600": "hsl(196, 24%, 76%)",
                ashGray: "hsl(126, 15%, 72%)",
                beige: "hsl(79, 55%, 92%)",
            },
            boxShadow: {
                // Add custom shadow configs
                // container: ``,
            },
            transitionTimingFunction: {
                "in-expo": "cubic-bezier(0.18, 0.5, 0, 0.99)",
            },
            aspectRatio: {
                "4/3": "4 / 3",
            },
        },
    },
    // Add your custom plugins
    // plugins: ["flowbite/plugin"],
};
