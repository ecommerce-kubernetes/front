import { CreateRequest, CreateResponse } from "../types/user";
import { apiFetch } from "./client";

export const create = async (data: CreateRequest): Promise<CreateResponse> => {
  return apiFetch("/user-service/users", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
