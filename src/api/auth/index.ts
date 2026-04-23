import { AuthUser } from "@/src/types/user";
import { apiFetch, authFetch } from "../client";
import { LoginRequest, LoginResponse } from "./types";
import { decodeTokenToUser } from "@/src/util/jwt";

export const login = async (
  data: LoginRequest,
): Promise<{ authUser: AuthUser; accessToken: string }> => {
  const response = await apiFetch<LoginResponse>("/user-service/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
    credentials: "include",
  });
  const authUser = decodeTokenToUser(response.accessToken);
  return { authUser, accessToken: response.accessToken };
};

export const logout = async () => {
  return authFetch("/user-service/auth/logout", {
    method: "POST",
    credentials: "include",
  });
};
