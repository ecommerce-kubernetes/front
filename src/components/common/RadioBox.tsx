import { forwardRef, InputHTMLAttributes } from "react";

type RadioBoxProps = InputHTMLAttributes<HTMLInputElement>;

const RadioBox = forwardRef<HTMLInputElement, RadioBoxProps>(
  ({ ...props }, ref) => {
    return (
      <label className="flex items-center cursor-pointer">
        <input type="radio" className="sr-only peer" ref={ref} {...props} />
        <div className="w-5 h-5 rounded-full border flex items-center justify-center border-gray-400 peer-checked:border-brand-primary peer-checked:[&>div]:block">
          <div className="w-3 h-3 rounded-full bg-brand-primary hidden"></div>
        </div>
      </label>
    );
  },
);

RadioBox.displayName = "RadioBox";
export default RadioBox;
