import { User } from "@/src/types/user";
import { apiFetch } from "../client";
import { SignupRequest, SignupResponse } from "./types";
import { mapUserToDomain } from "./mapper";

export const signup = async (data: SignupRequest): Promise<User> => {
  const response = await apiFetch<SignupResponse>("/user-service/users", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return mapUserToDomain(response);
};
