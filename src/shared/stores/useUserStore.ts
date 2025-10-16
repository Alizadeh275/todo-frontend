// src/shared/stores/useUserStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface User {
    name: string
    email: string
    bio?: string
    avatarUrl?: string | null
}

interface UserState {
    user: User
    updateUser: (payload: Partial<User>) => void
}

const defaultUser: User = {
    name: 'کاربر نمونه',
    email: 'user@example.com',
    bio: 'توضیحاتی درباره خودتان...',
    avatarUrl: null,
}

export const useUserStore = create<UserState>()(
    persist(
        (set, get) => ({
            user: defaultUser,
            updateUser: (payload) => {
                const merged = { ...get().user, ...payload }
                set({ user: merged })
            },
        }),
        {
            name: 'todo:user', // localStorage key
        }
    )
)
