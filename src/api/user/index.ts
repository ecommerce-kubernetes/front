import { User } from "@/src/types/user";
import { apiFetch } from "../client";
import { CreateRequest, CreateResponse } from "./types";
import { mapUserToDomain } from "./mapper";

export const create = async (data: CreateRequest): Promise<User> => {
  const response = await apiFetch<CreateResponse>("/user-service/users", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return mapUserToDomain(response);
};
