"use client";
import { UseFormRegisterReturn } from "react-hook-form";

interface BirthDateBoxProps {
  yearRegister: UseFormRegisterReturn;
  monthRegister: UseFormRegisterReturn;
  dayRegister: UseFormRegisterReturn;
  errorMessage?: string;
}

const BirthDateBox = ({
  yearRegister,
  monthRegister,
  dayRegister,
  errorMessage,
}: BirthDateBoxProps) => {
  const enforceNumberOnly = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "");
  };
  return (
    <div className="w-full flex flex-col gap-1">
      <div
        className={`w-full border border-gray-300 focus-within:border-brand-primary rounded-sm grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center px-4 py-3 bg-white
          ${errorMessage ? "border-red-500 focus-within:border-red-500" : "border-gray-300 focus-within:border-brand-primary"}`}
      >
        <input
          placeholder="YYYY"
          maxLength={4}
          inputMode="numeric"
          {...yearRegister}
          onInput={enforceNumberOnly}
          className="w-full min-w-0 text-center outline-none bg-transparent placeholder:text-gray-400"
        />
        <span className="text-gray-400">/</span>
        <input
          placeholder="MM"
          maxLength={2}
          inputMode="numeric"
          {...monthRegister}
          onInput={enforceNumberOnly}
          className="w-full min-w-0 text-center outline-none bg-transparent placeholder:text-gray-400"
        />
        <span className="text-gray-400">/</span>
        <input
          placeholder="DD"
          maxLength={2}
          inputMode="numeric"
          {...dayRegister}
          onInput={enforceNumberOnly}
          className="w-full min-w-0 text-center outline-none bg-transparent placeholder:text-gray-400"
        />
      </div>
      {errorMessage && (
        <span className="text-xs pl-1 text-red-500 font-medium">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default BirthDateBox;
