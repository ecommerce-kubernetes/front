import { create } from "@/src/api/user";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useCreateMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: create,
    onSuccess: () => {
      router.push("/");
    },
    onError: (error) => {
      console.log("회원가입 실패", error);
      alert("회원가입 실패");
    },
  });
};
