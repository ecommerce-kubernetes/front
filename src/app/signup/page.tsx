"use client";
import BirthDateBox from "@/src/components/common/BirthDateBox";
import InputBox from "@/src/components/common/InputBox";
import RadioBox from "@/src/components/common/RadioBox";
import { useSignup } from "@/src/hooks/useSignup";
import { Lock, LockKeyhole, Mail, Phone, User } from "lucide-react";

export default function SignupPage() {
  const { register, handleSubmit, errors, isPending } = useSignup();
  const birthDateError =
    errors.birthDate?.year?.message ||
    errors.birthDate?.month?.message ||
    errors.birthDate?.day?.message;
  return (
    <section className="w-full max-w-250 mx-auto flex items-center my-20 flex-col">
      <h1 className="font-bold text-xl font-pretendard">회원 가입</h1>
      <form onSubmit={handleSubmit} className="mt-5 w-80 flex flex-col gap-2">
        <InputBox
          headImg={Mail}
          type="text"
          placeholder="이메일"
          errorMessage={errors.email?.message}
          {...register("email")}
        />
        <InputBox
          headImg={Lock}
          type="password"
          placeholder="비밀번호"
          errorMessage={errors.password?.message}
          {...register("password")}
        />
        <InputBox
          headImg={LockKeyhole}
          type="password"
          placeholder="비밀번호 확인"
          errorMessage={errors.passwordConfirm?.message}
          {...register("passwordConfirm")}
        />
        <div className="flex flex-col select-none">
          <div className="flex items-center justify-around py-3">
            <div className="flex gap-3">
              <RadioBox value="MALE" {...register("gender")} />
              <span>남자</span>
            </div>
            <div className="flex gap-3">
              <RadioBox value="FEMALE" {...register("gender")} />
              <span>여자</span>
            </div>
          </div>
          {errors.gender?.message && (
            <span className="text-xs pl-1 text-red-500 font-medium">
              {errors.gender?.message}
            </span>
          )}
        </div>
        <BirthDateBox
          yearRegister={register("birthDate.year")}
          monthRegister={register("birthDate.month")}
          dayRegister={register("birthDate.day")}
          errorMessage={birthDateError}
        />
        <InputBox
          headImg={User}
          type="text"
          placeholder="이름"
          errorMessage={errors.name?.message}
          {...register("name")}
        />
        <InputBox
          headImg={Phone}
          type="text"
          placeholder="전화번호 (-없이 숫자만 입력)"
          maxLength={11}
          onInput={(e) => {
            e.currentTarget.value = e.currentTarget.value.replace(
              /[^0-9]/g,
              "",
            );
          }}
          errorMessage={errors.phoneNumber?.message}
          {...register("phoneNumber")}
        />
        <button
          type="submit"
          disabled={isPending}
          className="w-full py-3 cursor-pointer text-white bg-brand-primary rounded-sm"
        >
          가입하기
        </button>
      </form>
    </section>
  );
}
