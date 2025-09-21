import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{ts,tsx,js,jsx}",
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
