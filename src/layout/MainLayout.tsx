// src/layout/MainLayout.tsx
import { type ReactNode } from "react";
import Navbar from "./Navbar";

type Props = {
    children: ReactNode;
};

export default function MainLayout({ children }: Props) {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
            <Navbar />
            <main className="p-2">{children}</main>
        </div>
    );
}
