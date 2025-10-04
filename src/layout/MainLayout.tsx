// src/layout/MainLayout.tsx
import { type ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./Navbar";
import { useDarkModeContext } from "../shared/contexts/DarkModeContext";

type Props = { children: ReactNode };

export default function MainLayout({ children }: Props) {
    const { isDark } = useDarkModeContext();

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl
                pauseOnHover
                draggable
                theme={isDark ? "dark" : "light"}
            />
            <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
                <Navbar />
                <main className="p-2">{children}</main>
            </div>
        </>
    );
}
