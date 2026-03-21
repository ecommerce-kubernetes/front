export interface CreateRequest {
  email: string;
  password: string;
  name: string;
  birthDate: string;
  gender: string;
  phoneNumber: string;
}

export interface CreateResponse {
  id: number;
  email: string;
  name: string;
  birthDate: string;
  gender: string;
  phoneNumber: string;
}

export interface AuthUser {
  id: number;
  email: string;
  name: string;
  role: string;
}
