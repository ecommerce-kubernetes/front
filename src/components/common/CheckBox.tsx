import { Check } from "lucide-react";
import { forwardRef, InputHTMLAttributes } from "react";

type CheckBoxProps = InputHTMLAttributes<HTMLInputElement>;

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ checked, onChange, ...props }, ref) => {
    return (
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={onChange}
          ref={ref}
          {...props}
        />
        <div className="w-5 h-5 rounded-sm border flex items-center justify-center border-gray-400 peer-checked:bg-brand-primary peer-checked:border-none peer-checked:[&>.check-icon]:block">
          <Check size={24} className="text-white hidden check-icon" />
        </div>
      </label>
    );
  },
);

CheckBox.displayName = "CheckBox";
export default CheckBox;
