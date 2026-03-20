import { http, HttpResponse } from "msw";
import { MOCK_ACCESS_TOKEN } from "../data/userData";

const BASE_URL = "http://127.0.0.1:8000/user-service";

export const authHandlers = [
  http.post(`${BASE_URL}/auth/login`, () => {
    return HttpResponse.json(MOCK_ACCESS_TOKEN, {
      status: 200,
      headers: {
        "Set-Cookie": "refreshToken=dummyToken; HttpOnly; Path=/; Max-Age=100",
      },
    });
  }),

  http.post(`${BASE_URL}/auth/logout`, () => {
    return HttpResponse.json(null, {
      status: 204,
      headers: {
        "Set-Cookie": "refreshToken=; HttpOnly; Path=/; Max-Age=0",
      },
    });
  }),

  http.post(`${BASE_URL}/auth/refresh`, () => {
    return HttpResponse.json(MOCK_ACCESS_TOKEN, {
      status: 200,
      headers: {
        "Set-Cookie": "refreshToken=dummyToken; HttpOnly; Path=/; Max-Age=100",
      },
    });
  }),
];
