import { useState, useEffect } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const { isDark, toggle } = useDarkMode();
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // show only if scrollY is at top (0)
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
        bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200
        transition-all duration-300
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
            aria-label="Toggle theme"
        >
            {isDark ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    );
}
