import { useCallback, useState } from "react";

export interface User {
    name: string;
    email: string;
    bio?: string;
    avatarUrl?: string | null;
}

const LOCAL_KEY = "todo:user";

export function useUser() {
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

    const refresh = useCallback(() => {
        const raw = localStorage.getItem(LOCAL_KEY);
        setUser(raw ? JSON.parse(raw) : defaultUser);
    }, []);

    const updateUser = useCallback((payload: Partial<User>) => {
        const merged = { ...user, ...payload };
        setUser(merged);
        localStorage.setItem(LOCAL_KEY, JSON.stringify(merged));
        return merged;
    }, [user]);

    return { user, refresh, updateUser };
}
