import { LoginResponse, LoginRequest } from "../types/auth";
import { apiFetch } from "./client";

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  return apiFetch("/user-service/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
