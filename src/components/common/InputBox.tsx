import { LucideIcon } from "lucide-react";
import { forwardRef, InputHTMLAttributes } from "react";

interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  headImg: LucideIcon;
  errorMessage?: string;
  successMessage?: string;
}

const InputBox = forwardRef<HTMLInputElement, InputBoxProps>(
  ({ headImg: IconComponent, errorMessage, successMessage, ...props }, ref) => {
    return (
      <div className="flex flex-col w-full gap-1">
        <div
          className={`w-full border flex rounded-sm px-2 py-3 bg-white
        ${errorMessage ? "border-red-500 focus-within:border-red-500" : "border-gray-300 focus-within:border-brand-primary"}`}
        >
          <IconComponent size={26} />
          <input
            ref={ref}
            className="flex-1 pl-2 outline-none text-sm placeholder:text-gray-400"
            {...props}
          />
        </div>
        {errorMessage ? (
          <span className="text-xs pl-1 text-red-500 font-medium">
            {errorMessage}
          </span>
        ) : successMessage ? (
          <span className="text-xs pl-1 text-green-500 font-medium">
            {successMessage}
          </span>
        ) : null}
      </div>
    );
  },
);

InputBox.displayName = "InputBox";
export default InputBox;
