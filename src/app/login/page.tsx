"use client";
import InputBox from "@/src/components/common/InputBox";
import { Lock, Mail } from "lucide-react";
import { useLogin } from "@/src/hooks/useLogin";
import { Suspense } from "react";

function LoginForm() {
  const { register, handleSubmit, errors, isPending } = useLogin();

  return (
    <form onSubmit={handleSubmit} className="mt-5 w-80 flex flex-col gap-2">
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
        disabled={isPending}
        className="w-full py-3 cursor-pointer text-white bg-brand-primary rounded-sm"
      >
        로그인
      </button>
    </form>
  );
}

export default function LoginPage() {
  return (
    <section className="w-full max-w-250 mx-auto flex items-center my-20 flex-col">
      <h1 className="font-bold text-xl font-pretendard">로그인</h1>
      <Suspense fallback={<div className="mt-5"> 로딩중 ...</div>}>
        <LoginForm />
      </Suspense>
    </section>
  );
}
