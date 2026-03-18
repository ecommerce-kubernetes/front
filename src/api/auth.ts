import { LoginResponse, LoginRequest } from "../types/login";
import { apiFetch } from "./client";

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  return apiFetch("/user-service/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
