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
    reset,
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
      onError: () => {
        reset();
      },
    });
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isPending,
  };
};
