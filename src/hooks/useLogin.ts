import { useForm } from "react-hook-form";
import { LoginFormType, loginSchema } from "../validations/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "./queries/useAuthQuery";
import { LoginRequest } from "../types/login";

export const useLogin = () => {
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

    loginMutate(requestBody);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isPending,
  };
};
