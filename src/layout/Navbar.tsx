// src/layout/Navbar.tsx
import { Link } from "react-router-dom";
import { useUser } from "../shared/hooks/useUser";
import ThemeToggle from "../shared/components/ThemeToggle";
import { HomeIcon } from "@heroicons/react/24/outline"; // npm install @heroicons/react

export default function Navbar() {
    const { user } = useUser();

    return (
        <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* Left: Theme toggle + Profile avatar */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />

                        <Link to="/profile">
                            {user?.avatarUrl ? (
                                <img
                                    src={user.avatarUrl}
                                    alt="Profile"
                                    className="w-8 h-8 rounded-full object-cover border border-gray-300 dark:border-gray-600"
                                />
                            ) : (
                                <div className="w-8 h-8 rounded-full bg-gray-400 dark:bg-gray-700 flex items-center justify-center text-white text-sm">
                                    P
                                </div>
                            )}
                        </Link>
                    </div>

                    {/* Right: Home icon */}
                    <div>
                        <Link to="/">
                            <HomeIcon className="w-6 h-6 text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors" />
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
}
