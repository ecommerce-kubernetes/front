"use client";
import InputBox from "@/src/components/common/InputBox";
import { useForm } from "react-hook-form";
import { Lock, Mail } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "이메일을 입력해주세요.")
    .email("올바른 이메일 형식을 입력해주세요."),
  password: z
    .string()
    .min(1, "비밀번호를 입력해주세요.")
    .min(8, "비밀번호는 8자 이상이어야 합니다."),
});

type LoginFormType = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: LoginFormType) => {
    console.log(data);
  };
  return (
    <section className="w-full max-w-250 mx-auto flex items-center my-20 flex-col">
      <h1 className="font-bold text-xl font-pretendard">로그인</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-5 w-80 flex flex-col gap-2"
      >
        <InputBox
          headImg={Mail}
          type="text"
          placeholder="이메일을 입력해주세요"
          errorMessage={errors.email?.message}
          {...register("email")}
        />
        <InputBox
          headImg={Lock}
          type="password"
          placeholder="비밀번호를 입력해주세요"
          errorMessage={errors.password?.message}
          {...register("password")}
        />
        <button
          type="submit"
          className="w-full py-3 cursor-pointer text-white bg-brand-primary rounded-sm"
        >
          로그인
        </button>
      </form>
    </section>
  );
}
