import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignupFormType, signupSchema } from "../validations/signupSchema";
import { useRouter } from "next/navigation";
import { SignupRequest } from "../api/user/types";
import { useSignupMutation } from "./queries/useUserQuery";
import { formatPhoneNumber } from "../util/requestUtil";

const mapFormToSignupRequest = (data: SignupFormType): SignupRequest => {
  const { year, month, day } = data.birthDate;
  const formattedMonth = month.padStart(2, "0");
  const formattedDay = day.padStart(2, "0");
  const finalBirthDate = `${year}-${formattedMonth}-${formattedDay}`;
  const formattedPhoneNumber = formatPhoneNumber(data.phoneNumber);
  return {
    email: data.email,
    password: data.password,
    name: data.name,
    birthDate: finalBirthDate,
    gender: data.gender,
    phoneNumber: formattedPhoneNumber,
  };
};

export const useSignup = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignupFormType>({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      gender: "MALE",
      name: "",
      phoneNumber: "",
    },
  });

  const { mutate: signup, isPending } = useSignupMutation();

  const onSubmit = (data: SignupFormType) => {
    const requestBody = mapFormToSignupRequest(data);
    signup(requestBody, {
      onSuccess: () => {
        router.push("/");
      },
      onError: () => {
        reset({ password: "", passwordConfirm: "" });
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
