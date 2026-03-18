import { login } from "@/src/api/auth";
import { useAuthStore } from "@/src/store/useAuthStore";
import { AuthUser, LoginPayload, LoginRequest } from "@/src/types/auth";
import { useMutation } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";

export const useLoginMutation = () => {
  const { setAuth } = useAuthStore();
  return useMutation({
    mutationFn: (data: LoginRequest) => login(data),
    onSuccess: (response) => {
      const token = response.accessToken;
      try {
        const decoded = jwtDecode<LoginPayload>(token);

        const userInfo: AuthUser = {
          id: decoded.sub,
          email: decoded.email,
          name: decoded.name,
          role: decoded.role,
        };
        setAuth(userInfo, token);
      } catch (error) {
        console.error("잘못된 토큰 형식", error);
      }
    },

    onError: (error) => {
      console.error("로그인 실패", error);
      alert("로그인 실패");
    },
  });
};
