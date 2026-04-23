import { emailAvailability, signup } from "@/src/api/user";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useSignupMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: signup,
    onSuccess: () => {
      router.push("/");
    },
    onError: (error) => {
      console.log("회원가입 실패", error);
      alert("회원가입 실패");
    },
  });
};

export const useCheckEmailMutation = () => {
  return useMutation({
    mutationFn: emailAvailability,
  });
};
