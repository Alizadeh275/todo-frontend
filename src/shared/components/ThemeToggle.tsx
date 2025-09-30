import { useDarkMode } from "../hooks/useDarkMode";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const { isDark, toggle } = useDarkMode();

    return (
        <button
            onClick={toggle}
            className="cursor-pointer fixed p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition"
            aria-label="Toggle theme"
        >
            {isDark ? (
                <Moon size={20} />
            ) : (
                <Sun size={20} />
            )}
        </button>
    );
}
