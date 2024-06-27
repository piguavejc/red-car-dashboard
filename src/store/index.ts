'use client'

import { devtools, persist } from 'zustand/middleware'

import { create } from 'zustand'

interface BearState {
  isCollapsed: boolean
  setIsCollapsed: (state: boolean) => void
}

export const useCollapsed = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        isCollapsed: false,
        setIsCollapsed: (state) => set(() => ({ isCollapsed: state }))
      }),
      { name: 'collapsedStore' }
    )
  )
)
