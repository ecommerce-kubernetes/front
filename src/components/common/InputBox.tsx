import { LucideIcon } from "lucide-react";

interface InputBoxProps {
  headImg: LucideIcon;
  keyword: string;
}

export default function InputBox({ headImg, keyword }: InputBoxProps) {
  const IconComponent = headImg;
  return (
    <div className="w-full flex border">
      <IconComponent size={26} />
      <input />
    </div>
  );
}
