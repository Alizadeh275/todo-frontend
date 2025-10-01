// hooks/useDarkMode.ts
import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode() {
    // Use localStorage to store dark mode preference
    const [isDark, setIsDark] = useLocalStorage("dark-mode",
        document.documentElement.classList.contains("dark")
    );

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDark]);

    const toggle = () => setIsDark(prev => !prev);

    return { isDark, toggle };
}
