import { create } from "zustand";

interface MobileMenuState {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

export const useMobileMenuStore = create<MobileMenuState>()((set) => ({
    isOpen: false,
    setIsOpen: (isOpen: boolean) => set({ isOpen: isOpen })
}))