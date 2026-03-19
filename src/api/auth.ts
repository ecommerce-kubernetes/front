import { LoginResponse, LoginRequest } from "../types/auth";
import { apiFetch } from "./client";

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  return apiFetch("/user-service/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
    credentials: "include",
  });
};

export const logout = async () => {
  return apiFetch("/user-service/auth/logout", {
    method: "POST",
    credentials: "include",
  });
};
