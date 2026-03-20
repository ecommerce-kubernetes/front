import { useAuthStore } from "../store/useAuthStore";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const apiFetch = async (url: string, options: RequestInit = {}) => {
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

export const authFetch = async (url: string, options: RequestInit = {}) => {
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
      const refreshResponse = await fetch(
        `${BASE_URL}/user-service/auth/refresh`,
        {
          method: "POST",
          credentials: "include",
        },
      );

      if (!refreshResponse.ok) {
        throw new Error("리프레시 토큰 만료");
      }

      const newTokenData = await refreshResponse.json();
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
      window.location.href = "/login";
      throw error;
    }
  }
};
