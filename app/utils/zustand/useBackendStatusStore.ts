import { create } from "zustand"

interface BackendStatusState {
    isBackendReachable: boolean
    setBackendReachable: (reachable: boolean) => void
}

const useBackendStatusStore = create<BackendStatusState>((set) => ({
    isBackendReachable: true,
    setBackendReachable: (reachable: boolean) => set({ isBackendReachable: reachable }),
}))

export default useBackendStatusStore
