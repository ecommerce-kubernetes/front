import { AuthUser } from "@/src/types/user";
import { jwtDecode } from "jwt-decode";
import { LoginPayload } from "./types";

export const mapTokenToAuthUser = (accessToken: string): AuthUser => {
  const decoded = jwtDecode<LoginPayload>(accessToken);
  return {
    id: decoded.sub,
    email: decoded.email,
    name: decoded.name,
    role: decoded.role,
  };
};
