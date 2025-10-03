// src/layout/MainLayout.tsx
import { type ReactNode } from "react";
import { ToastContainer } from "react-toastify";

import Navbar from "./Navbar";

type Props = {
    children: ReactNode;
};

export default function MainLayout({ children }: Props) {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={true}
                pauseOnHover
                draggable
                theme="light" // 👈 you can also set this to "dark" or "colored"
            />
            <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
                <Navbar />
                <main className="p-2">{children}</main>
            </div>

        </>
    );
}
