import { AuthUser } from "@/src/types/user";
import { apiFetch, authFetch } from "../client";
import { mapTokenToAuthUser } from "./mapper";
import { LoginRequest, LoginResponse } from "./types";

export const login = async (
  data: LoginRequest,
): Promise<{ authUser: AuthUser; accessToken: string }> => {
  const response = await apiFetch<LoginResponse>("/user-service/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
    credentials: "include",
  });
  const authUser = mapTokenToAuthUser(response.accessToken);
  return { authUser, accessToken: response.accessToken };
};

export const logout = async () => {
  return authFetch("/user-service/auth/logout", {
    method: "POST",
    credentials: "include",
  });
};
