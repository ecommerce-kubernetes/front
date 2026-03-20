import { LoginResponse, LoginRequest } from "../types/auth";
import { apiFetch, authFetch } from "./client";

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  return apiFetch("/user-service/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
    credentials: "include",
  });
};

export const logout = async () => {
  return authFetch("/user-service/auth/logout", {
    method: "POST",
    credentials: "include",
  });
};
