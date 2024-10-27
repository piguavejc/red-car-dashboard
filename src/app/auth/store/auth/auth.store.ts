import { create, type StateCreator } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  email: string
  setEmail: (email: string) => void
}

const authStore: StateCreator<AuthState> = (set) => ({
  email: '',
  setEmail: (email) => set({ email })
})

export const useAuthStore = create<AuthState>()(
  persist(authStore, { name: 'register' })
)
