import { create } from "zustand"

type User = {
    id: number
    name: string
}

type UserStore = {
    user: User | null
    setUser: (user: User) => void
    clearUser: () => void
}

const useUserStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    clearUser: () => set({ user: null }),
}))

export default useUserStore
