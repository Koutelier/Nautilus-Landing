/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                app: "#ffae00",
                app_bg: "#1d1b27",
                app_gray: "#ffae00",
            },
        },
        fontFamily: {
            sans: ["Graphik", "sans-serif"],
            serif: ["Merriweather", "serif"],
            nominee: ["Nominee", "sans- serif"],
            redzone: ["Redzone", "sans- serif"],
        },
    },
    plugins: [
        {
            ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
        },
    ],
};
