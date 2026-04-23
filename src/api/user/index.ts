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

export const emailAvailability = async (email: string): Promise<boolean> => {
  const response = await apiFetch<{ available: boolean }>(
    `/user-service/users/email-availability?email=${email}`,
    {
      method: "GET",
    },
  );

  return response.available;
};
