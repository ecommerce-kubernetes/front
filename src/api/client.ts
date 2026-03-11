const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const apiFetch = async (url: string, options: RequestInit = {}) => {
  /*
  TODO Authorization 헤더 토큰 추가
  */
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
