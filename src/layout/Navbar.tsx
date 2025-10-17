// src/layout/Navbar.tsx
import { Link } from "react-router-dom";
import { useUserStore } from "../shared/stores/useUserStore";
import ThemeToggle from "../shared/components/ThemeToggle";
import { Home, User2 } from "lucide-react";

export default function Navbar() {
    const user = useUserStore((state) => state.user);

    return (
        <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
            <div className="w-full flex justify-between h-16 items-center px-2 sm:px-4 lg:px-8">

                {/* Left side: Home icon */}
                <div>
                    <Link to="/">
                        <Home className="w-6 h-6 text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors" />
                    </Link>
                </div>

                {/* Right side: Welcome + Profile + Theme toggle */}
                <div className="flex items-center gap-4">
                    <Link to="/profile" className="flex items-center gap-2">
                        {user?.avatarUrl ? (
                            <>
                                <span className="text-gray-700 dark:text-gray-200 text-sm sm:text-base">
                                    خوش آمدی {user.name}!
                                </span>
                                <img
                                    src={user.avatarUrl}
                                    alt="Profile"
                                    className="w-8 h-8 rounded-full object-cover border border-gray-300 dark:border-gray-600"
                                />

                            </>
                        ) : (
                            <>
                                <span className="text-gray-700 dark:text-gray-200 text-sm sm:text-base">
                                    خوش آمدی {user?.name || "کاربر"}!
                                </span>
                                <div className="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center border border-gray-300 dark:border-gray-600">
                                    <User2 className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                                </div>

                            </>
                        )}
                    </Link>

                    <ThemeToggle />
                </div>

            </div>
        </header>
    );
}
