export interface LoginResponse {
  accessToken: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginPayload {
  iss?: string;
  sub: number;
  iat?: number;
  exp?: number;

  email: string;
  name: string;
  role: string;
  token_type: string;
}

export interface AuthUser {
  id: number;
  email: string;
  name: string;
  role: string;
}
