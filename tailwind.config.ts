import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class", // or "media"

    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                iran: ["IRANSans", "sans-serif"], // نام فونتی که در @font-face تعریف کردی
            },
        },
    },
    plugins: [],
};

export default config;
