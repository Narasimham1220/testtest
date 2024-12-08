import { create } from 'zustand';

interface NavigationStore {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const useNavigation = create<NavigationStore>((set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));