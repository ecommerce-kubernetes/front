import InputBox from "@/src/components/common/InputBox";
import { Lock, Mail } from "lucide-react";

export default function LoginPage() {
  return (
    <section className="w-full max-w-250 mx-auto flex items-center my-20 flex-col">
      <h1 className="font-bold text-xl font-pretendard">로그인</h1>
      <form className="mt-5 w-80 flex flex-col gap-2">
        <InputBox
          headImg={Mail}
          value=""
          placeHolder="이메일을 입력해주세요"
          type="text"
        />
        <InputBox
          headImg={Lock}
          value=""
          placeHolder="비밀번호를 입력해주세요"
          type="password"
        />
        <button className="w-full py-3 cursor-pointer text-white bg-brand-primary rounded-sm">
          로그인
        </button>
      </form>
    </section>
  );
}
