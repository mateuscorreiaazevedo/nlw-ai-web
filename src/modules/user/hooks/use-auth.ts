import { create } from 'zustand'

type Stores = {
  user: UserType | null
}

export const useAuth = create<Stores>(_set => ({
  user: null
}))
