import { ChevronDown } from "lucide-react";

interface OptionProps {
  name: string;
  value: string | number;
  disabled?: boolean;
}

export interface SelectBoxProps {
  type: string;
  options: OptionProps[];
  value: string | number;
  onChange: (value: string | number) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const SelectBox = ({ selectProps }: { selectProps: SelectBoxProps }) => {
  const selectedName = selectProps.options.find(
    (opt) => opt.value === selectProps.value,
  )?.name;
  return (
    <div className="relative flex flex-col gap-1.5 w-full">
      <button
        onClick={selectProps.onToggle}
        className="flex items-center justify-between w-full border border-gray-300 rounded-sm p-3 text-sm bg-white focus:border-brand-primary outline-none"
      >
        <span className={selectProps.value ? "text-gray-900" : "text-gray-400"}>
          {selectProps.value
            ? selectedName
            : `${selectProps.type}을(를) 선택하세요`}
        </span>
        <ChevronDown
          size={16}
          className={`text-gray-500 transition-transform ${selectProps.isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {selectProps.isOpen && (
        <ul className="absolute top-12 left-0 w-full border bg-white border-gray-300 rounded-sm shadow-lg z-10 overflow-hidden">
          {selectProps.options.map((option) => (
            <li
              key={option.value}
              className={`p-3 text-sm transition-colors ${
                option.disabled
                  ? "text-gray-300 bg-gray-50 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-50 cursor-pointer"
              }`}
              onClick={() => {
                if (option.disabled) return;
                selectProps.onChange(option.value);
                selectProps.onToggle();
              }}
            >
              {option.name} {option.disabled && "(선택불가)"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
