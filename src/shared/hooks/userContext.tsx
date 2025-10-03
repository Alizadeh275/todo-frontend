// src/shared/hooks/UserContext.tsx
import { createContext, useContext, useState, type ReactNode } from "react";

export interface User {
    name: string;
    email: string;
    bio?: string;
    avatarUrl?: string | null;
}

type UserContextType = {
    user: User;
    updateUser: (payload: Partial<User>) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
    const LOCAL_KEY = "todo:user";

    const defaultUser: User = {
        name: "کاربر نمونه",
        email: "user@example.com",
        bio: "توضیحاتی درباره خودتان...",
        avatarUrl: null,
    };

    const [user, setUser] = useState<User>(() => {
        const raw = localStorage.getItem(LOCAL_KEY);
        return raw ? JSON.parse(raw) : defaultUser;
    });

    const updateUser = (payload: Partial<User>) => {
        const merged = { ...user, ...payload };
        setUser(merged);
        localStorage.setItem(LOCAL_KEY, JSON.stringify(merged));
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
    const context = useContext(UserContext);
    if (!context) throw new Error("useUser must be used within UserProvider");
    return context;
}
