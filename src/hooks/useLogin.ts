import { useForm } from "react-hook-form";
import { LoginFormType, loginSchema } from "../validations/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "./queries/useAuthQuery";
import { LoginRequest } from "../types/auth";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const { mutate: loginMutate, isPending } = useLoginMutation();

  const onSubmit = (data: LoginFormType) => {
    const requestBody: LoginRequest = {
      email: data.email,
      password: data.password,
    };

    loginMutate(requestBody, {
      onSuccess: () => {
        router.push("/");
      },
      //로그인 실패시 추가 작업
      onError: () => {},
    });
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isPending,
  };
};
