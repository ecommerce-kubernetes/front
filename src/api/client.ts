import { useAuthStore } from "../store/useAuthStore";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const refreshAccessToken = async (): Promise<{
  accessToken: string;
}> => {
  const response = await fetch(`${BASE_URL}/user-service/auth/refresh`, {
    method: "POST",
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("리프레시 토큰 만료");
  }

  return response.json();
};

export const apiFetch = async <T>(
  url: string,
  options: RequestInit = {},
): Promise<T> => {
  const response = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
  if (!response.ok) {
    throw new Error("API 요청 실패");
  }

  return response.json();
};

export const authFetch = async <T>(
  url: string,
  options: RequestInit = {},
): Promise<T> => {
  const { accessToken, clearAuth, setAccessToken } = useAuthStore.getState();

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    ...options.headers,
  };

  let response = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers,
  });

  if (response.status === 401) {
    try {
      const newTokenData = await refreshAccessToken();
      setAccessToken(newTokenData.accessToken);

      const retryHeaders = {
        ...headers,
        Authorization: `Bearer ${newTokenData.accessToken}`,
      };

      response = await fetch(`${BASE_URL}${url}`, {
        ...options,
        headers: retryHeaders,
      });
    } catch (error) {
      clearAuth();
      console.log(error);
      throw new Error("UNAUTHORIZED");
    }
  }

  if (!response.ok) {
    throw new Error("API 요청 실패");
  }

  return response.json();
};
