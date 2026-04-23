import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignupFormType, signupSchema } from "../validations/signupSchema";
import { useRouter } from "next/navigation";
import { SignupRequest } from "../api/user/types";
import {
  useCheckEmailMutation,
  useSignupMutation,
} from "./queries/useUserQuery";
import { formatPhoneNumber } from "../util/requestUtil";
import { useState } from "react";

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
  const [isEmailAvailable, setIsEmailAvailable] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    trigger,
    setError,
    clearErrors,
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

  const { mutate: signup, isPending: signupPending } = useSignupMutation();
  const { mutateAsync: checkEmail, isPending: checkEmailPending } =
    useCheckEmailMutation();

  const emailRegister = register("email", {
    onChange: () => {
      if (isEmailAvailable) {
        setIsEmailAvailable(false);
      }
    },
    onBlur: async (e) => {
      const isValidFormat = await trigger("email");
      if (!isValidFormat) {
        return;
      }
      const emailValue = e.target.value;

      try {
        const isAvailable = await checkEmail(emailValue);
        if (isAvailable) {
          setIsEmailAvailable(true);
          clearErrors("email");
        } else {
          setIsEmailAvailable(false);
          setError("email", {
            type: "manual",
            message: "이미 사용중인 이메일 입니다",
          });
        }
      } catch (error) {
        console.error("이메일 중복 확인 에러", error);
      }
    },
  });

  const onSubmit = (data: SignupFormType) => {
    if (!isEmailAvailable) {
      setError("email", {
        type: "manual",
        message: "이메일 중복 확인이 필요합니다",
      });
      return;
    }

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
    emailRegister,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    signupPending,
    isEmailAvailable,
    checkEmailPending,
  };
};
