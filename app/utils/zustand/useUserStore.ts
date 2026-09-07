import { create } from "zustand"

import type { Department } from "@/common/schemas/department"

export type User = {
    id: number
    name: string
    studentNumber?: number
    majorDepartments?: readonly Department[]
}

export type UserStatus = "idle" | "loading" | "success"

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

export default useUserStore
