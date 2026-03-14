import InputBox from "@/src/components/common/InputBox";
import { Lock, Mail } from "lucide-react";

export default function LoginPage() {
  return (
    <section className="w-full max-w-250 mx-auto flex items-center my-20 flex-col">
      <h1 className="font-bold text-xl font-pretendard">로그인</h1>
      <form className="mt-10 w-70">
        <InputBox headImg={Mail} keyword="" />
        <InputBox headImg={Lock} keyword="" />
      </form>
    </section>
  );
}
