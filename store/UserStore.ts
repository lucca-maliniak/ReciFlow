import { User } from '@/model/User'
import { IMOCK_NEWS } from '@/shared/Mock'
import { create } from 'zustand'

export const useUserStore = create((set) => ({
  selectedUser: {} as User,
  setupUser: (user: User) => set({ selectedUser: user }),
  cleanUser: () => set({ selectedUser: {} }),
  likePost: (post: IMOCK_NEWS) => set((state: any) => state.selectedUser.likedPosts.push(post)),
  removePost: (post: IMOCK_NEWS) => set((state: any) => state.selectedUser.likedPosts.id === post.id && state.selectedUser.likedPosts.splice(post.id - 1, 1)),
}))