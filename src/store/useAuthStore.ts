import { create } from "zustand";

export interface User {
  id: number;
  email: string;
  name: string;
  role: string;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  isLoggedIn: boolean;

  login: (user: User, token: string) => void;
  logout: () => void;
  setAccessToken: (token: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,
  isLoggedIn: false,

  login: (user, token) =>
    set({
      user,
      accessToken: token,
      isLoggedIn: true,
    }),

  logout: () =>
    set({
      user: null,
      accessToken: null,
      isLoggedIn: false,
    }),

  setAccessToken: (token) =>
    set({
      accessToken: token,
      isLoggedIn: true,
    }),
}));
