export interface SignupRequest {
  email: string;
  password: string;
  name: string;
  birthDate: string;
  gender: string;
  phoneNumber: string;
}

export interface SignupResponse {
  id: number;
  email: string;
  name: string;
  birthDate: string;
  gender: "MALE" | "FEMALE";
  phoneNumber: string;
}
