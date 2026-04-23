import { login, logout } from "@/src/api/auth";
import { useAuthStore } from "@/src/store/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useLoginMutation = () => {
  const { setAuth } = useAuthStore();
  return useMutation({
    mutationFn: login,
    onSuccess: ({ authUser, accessToken }) => {
      setAuth(authUser, accessToken);
    },

    onError: (error) => {
      console.error("로그인 실패", error);
      alert("로그인 실패");
    },
  });
};

export const useLogoutMutation = () => {
  const { clearAuth } = useAuthStore();
  const router = useRouter();
  const handleLogoutSuccess = () => {
    clearAuth();
    router.push("/");
  };
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      handleLogoutSuccess();
    },
    onError: () => {
      handleLogoutSuccess();
    },
  });
};
