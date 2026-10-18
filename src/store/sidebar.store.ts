import { create } from "zustand";

interface SidebarStore {
  openSidebar: boolean;
  setOpenSidebar: (openSidebar: boolean) => void;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  openSidebar: false,
  setOpenSidebar: (openSidebar) => set({ openSidebar }),
}));
