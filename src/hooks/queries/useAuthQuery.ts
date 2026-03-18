import { login } from "@/src/api/auth";
import { LoginRequest } from "@/src/types/login";
import { useMutation } from "@tanstack/react-query";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (data: LoginRequest) => login(data),
    onSuccess: (response) => {
      console.log("로그인 성공", response.accessToken);
    },
    onError: (error) => {
      console.error("로그인 실패", error);
      alert("로그인 실패");
    },
  });
};
