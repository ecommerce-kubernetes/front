import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignupFormType, signupSchema } from "../validations/signupSchema";
import { CreateRequest } from "../types/user";
import { useCreateMutation } from "./queries/useUserQuery";
import { useRouter } from "next/navigation";

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

  const { mutate: create, isPending } = useCreateMutation();

  const onSubmit = (data: SignupFormType) => {
    const { year, month, day } = data.birthDate;
    const formattedMonth = month.padStart(2, "0");
    const formattedDay = day.padStart(2, "0");
    const finalBirthDate = `${year}-${formattedMonth}-${formattedDay}`;

    const formatPhoneNumber = (phoneNumber: string) => {
      const cleaned = phoneNumber.replace(/\D/g, "");

      if (cleaned.startsWith("02")) {
        return cleaned.replace(/(\d{2})(\d{3,4})(\d{4})/, "$1-$2-$3");
      }
      return cleaned.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1-$2-$3");
    };
    const formattedPhoneNumber = formatPhoneNumber(data.phoneNumber);

    const requestBody: CreateRequest = {
      email: data.email,
      password: data.password,
      name: data.name,
      birthDate: finalBirthDate,
      gender: data.gender,
      phoneNumber: formattedPhoneNumber,
    };

    create(requestBody, {
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
