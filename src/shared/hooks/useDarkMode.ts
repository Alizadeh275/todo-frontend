// hooks/useDarkMode.ts
import { useEffect, useState } from "react";

export function useDarkMode() {
    const [isDark, setIsDark] = useState(
        () => document.documentElement.classList.contains("dark")
    );

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDark]);

    return { isDark, toggle: () => setIsDark((prev) => !prev) };
}
