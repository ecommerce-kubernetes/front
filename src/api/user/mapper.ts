import { User } from "@/src/types/user";
import { CreateResponse } from "./types";

export const mapUserToDomain = (raw: CreateResponse): User => {
  return {
    id: raw.id,
    email: raw.email,
    name: raw.name,
    birthDate: raw.birthDate,
    gender: raw.gender,
    phoneNumber: raw.phoneNumber,
  };
};
