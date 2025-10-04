// src/shared/contexts/DarkModeContext.tsx
import { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type DarkModeContextType = {
    isDark: boolean;
    toggle: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
    const [isDark, setIsDark] = useLocalStorage(
        "dark-mode",
        document.documentElement.classList.contains("dark")
    );

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDark]);

    const toggle = () => setIsDark((prev: boolean) => !prev);

    return (
        <DarkModeContext.Provider value={{ isDark, toggle }}>
            {children}
        </DarkModeContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useDarkModeContext() {
    const ctx = useContext(DarkModeContext);
    if (!ctx) throw new Error("useDarkModeContext must be used inside DarkModeProvider");
    return ctx;
}
