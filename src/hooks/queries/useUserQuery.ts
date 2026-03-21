import { create } from "@/src/api/user";
import { CreateRequest } from "@/src/types/user";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useCreateMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: CreateRequest) => create(data),
    onSuccess: () => {
      router.push("/");
    },
    onError: (error) => {
      console.log("회원가입 실패", error);
      alert("회원가입 실패");
    },
  });
};
