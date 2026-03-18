import { LucideIcon } from "lucide-react";

interface InputBoxProps {
  headImg: LucideIcon;
  value: string;
  placeHolder: string;
  type: string;
}

export default function InputBox({
  headImg,
  value,
  placeHolder,
  type,
}: InputBoxProps) {
  const IconComponent = headImg;
  return (
    <div className="w-full border border-gray-300 flex rounded-sm px-2 py-3 focus-within:border-brand-primary bg-white">
      <IconComponent size={26} />
      <input
        className="flex-1 pl-2 outline-none text-sm"
        type={type}
        placeholder={placeHolder}
      />
    </div>
  );
}
