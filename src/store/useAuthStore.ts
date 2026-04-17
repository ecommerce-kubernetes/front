import { create } from "zustand";
import { AuthUser } from "../types/user";

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

  setAuth: (user, token) => {
    localStorage.setItem("isLoggedIn", "true");
    set({
      user,
      accessToken: token,
      isLoggedIn: true,
    });
  },

  clearAuth: () => {
    localStorage.removeItem("isLoggedIn");
    set({
      user: null,
      accessToken: null,
      isLoggedIn: false,
    });
  },

  setAccessToken: (token) => {
    localStorage.setItem("isLoggedIn", "true");
    set({
      accessToken: token,
      isLoggedIn: true,
    });
  },
}));
