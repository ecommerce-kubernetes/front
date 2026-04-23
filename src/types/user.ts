export interface AuthUser {
  id: number;
  email: string;
  name: string;
  role: string;
}

export type Gender = "MALE" | "FEMALE";

export interface User {
  id: number;
  email: string;
  name: string;
  birthDate: string;
  gender: Gender;
  phoneNumber: string;
}
