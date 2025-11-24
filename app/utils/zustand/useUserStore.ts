import { create } from "zustand"

type User = {
    id: number
    name: string
}

type UserStore = {
    user: User | null
    status: "idle" | "loading" | "success"
    setUser: (user: User) => void
    clearUser: () => void
}

const useUserStore = create<UserStore>((set) => ({
    user: null,
    status: "loading",
    setUser: (user) => set({ user, status: "success" }),
    clearUser: () => set({ user: null, status: "idle" }),
}))

export default useUserStore
