/** @type {import('tailwindcss').Config} */


module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/tw-elements-react/dist/js/**/*.js",
        "./node_modules/flowbite/**/*.js"

    ],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [
        require('flowbite/plugin')
    ]
    }
7n