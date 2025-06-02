import { User } from '@/model/User'
import { create } from 'zustand'

export const useUserStore = create((set) => ({
  selectedUser: {} as User,
  setupUser: (user: User) => set({ selectedUser: user }),
  cleanUser: () => set({ selectedUser: {} })
}))