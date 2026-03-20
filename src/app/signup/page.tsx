import BirthDateBox from "@/src/components/common/BirthDateBox";
import InputBox from "@/src/components/common/InputBox";
import RadioBox from "@/src/components/common/RadioBox";
import { Lock, LockKeyhole, Mail, Phone, User } from "lucide-react";

export default function SignupPage() {
  return (
    <section className="w-full max-w-250 mx-auto flex items-center my-20 flex-col">
      <h1 className="font-bold text-xl font-pretendard">회원 가입</h1>
      <form className="mt-5 w-80 flex flex-col gap-2">
        <InputBox headImg={Mail} type="text" placeholder="이메일" />
        <InputBox headImg={Lock} type="password" placeholder="비밀번호" />
        <InputBox
          headImg={LockKeyhole}
          type="password"
          placeholder="비밀번호 확인"
        />
        <div className="flex items-center justify-around py-3">
          <div className="flex gap-3">
            <RadioBox name="gender" value="MALE" />
            <span>남자</span>
          </div>
          <div className="flex gap-3">
            <RadioBox name="gender" value="FEMALE" />
            <span>여자</span>
          </div>
        </div>
        <BirthDateBox />
        <InputBox headImg={User} type="text" placeholder="이름" />
        <InputBox headImg={Phone} type="text" placeholder="전화번호" />
      </form>
    </section>
  );
}
