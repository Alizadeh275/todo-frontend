import { useState, useEffect } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const { isDark, toggle } = useDarkMode();
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY === 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <button
            onClick={toggle}
            className={`
                cursor-pointer
                fixed top-4 left-4 p-2 rounded-full
                bg-gray-50 dark:bg-gray-800
                transition-all duration-300
                ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
                hover:scale-110 hover:shadow-lg
            `}
            aria-label="Toggle theme"
        >
            {isDark ? (
                <Moon
                    size={25}
                    className="text-yellow-400 transition-transform duration-300 hover:rotate-12 hover:scale-125"
                />
            ) : (
                <Sun
                    size={25}
                    className="text-yellow-400 transition-transform duration-300 hover:rotate-12 hover:scale-125"
                />
            )}
        </button>
    );
}
