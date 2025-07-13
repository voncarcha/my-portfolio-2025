import { create } from 'zustand';

export interface IGlobalState {
  isContactOpen: boolean;
  setContactOpen: (value: boolean) => void;
  isContactSuccess: boolean;
  setContactSuccess: (value: boolean) => void;
  isNavOpen: boolean;
  setNavOpen: (value: boolean) => void;
  isVideoLoaded: boolean;
  setVideoLoaded: (value: boolean) => void;
}

const useGlobalStore = create<IGlobalState>((set) => ({
  isContactSuccess: false,
  setContactSuccess: (value) =>
    set(() => ({
      isContactSuccess: value,
    })),
  isContactOpen: false,
  setContactOpen: (value) =>
    set(() => ({
      isContactOpen: value,
    })),
  isNavOpen: false,
  setNavOpen: (value) =>
    set(() => ({
      isNavOpen: value,
    })),
  isVideoLoaded: false,
  setVideoLoaded: (value) =>
    set(() => ({
      isVideoLoaded: value,
    })),
}));

export default useGlobalStore;
