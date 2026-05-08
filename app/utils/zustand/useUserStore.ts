import { create } from "zustand"

type User = {
    id: number
    name: string
}

type UserStatus = "idle" | "loading" | "success"

type UserStore = {
    user: User | null
    status: UserStatus
    setUser: (user: User) => void
    clearUser: () => void
}

const useUserStore = create<UserStore>((set) => ({
    user: null,
    status: "loading",
    setUser: (user) => set({ user, status: "success" }),
    clearUser: () => set({ user: null, status: "idle" }),
}))

export const useCurrentUser = () => useUserStore((s) => s.user)
export const useUserStatus = () => useUserStore((s) => s.status)
export const useSetUser = () => useUserStore((s) => s.setUser)
export const useClearUser = () => useUserStore((s) => s.clearUser)

export default useUserStore
