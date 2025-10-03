import { useDarkMode } from "../hooks/useDarkMode";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const { isDark, toggle } = useDarkMode();

    return (
        <button
            onClick={toggle}
            className={`
        cursor-pointer p-2 rounded-full
        bg-gray-50 dark:bg-gray-800
        transition-all duration-300
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
