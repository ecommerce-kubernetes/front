import { create } from "zustand";
import { AuthUser } from "../types/auth";

interface AuthState {
  user: AuthUser | null;
  accessToken: string | null;
  isLoggedIn: boolean;

  setAuth: (user: AuthUser, token: string) => void;
  clearAuth: () => void;
  setAccessToken: (token: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,
  isLoggedIn: false,

  setAuth: (user, token) =>
    set({
      user,
      accessToken: token,
      isLoggedIn: true,
    }),

  clearAuth: () =>
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
