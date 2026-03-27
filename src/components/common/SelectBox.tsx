"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface OptionProps {
  name: string;
  value: string | number;
}

export interface SelectBoxProps {
  type: string;
  options: OptionProps[];
  value: string | number;
  onChange: (value: string | number) => void;
}

export const SelectBox = ({ selectProps }: { selectProps: SelectBoxProps }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedName = selectProps.options.find(
    (opt) => opt.value === selectProps.value,
  )?.name;
  return (
    <div className="relative flex flex-col gap-1.5 w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full border border-gray-300 rounded-sm p-3 text-sm bg-white focus:border-brand-primary outline-none"
      >
        <span className={selectProps.value ? "text-gray-900" : "text-gray-400"}>
          {selectProps.value
            ? selectedName
            : `${selectProps.type}을(를) 선택하세요`}
        </span>
        <ChevronDown
          size={16}
          className={`text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <ul className="absolute top-12 left-0 w-full border bg-white border-gray-300 rounded-sm shadow-lg z-10 overflow-hidden">
          {selectProps.options.map((option) => (
            <li
              key={option.value}
              className="p-3 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors"
              onClick={() => {
                selectProps.onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
