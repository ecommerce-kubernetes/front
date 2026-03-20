"use client";
import { forwardRef, InputHTMLAttributes } from "react";

type BirthDateBoxProps = InputHTMLAttributes<HTMLInputElement>;

const BirthDateBox = forwardRef<HTMLInputElement, BirthDateBoxProps>(
  ({ ...props }, ref) => {
    const enforceNumberOnly = (e: React.FormEvent<HTMLInputElement>) => {
      e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "");
    };
    return (
      <div className="w-full flex flex-col gap-1">
        <div className="w-full border border-gray-300 focus-within:border-brand-primary rounded-sm grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center px-4 py-3 bg-white">
          <input
            placeholder="YYYY"
            maxLength={4}
            inputMode="numeric"
            onInput={enforceNumberOnly}
            className="w-full min-w-0 text-center outline-none bg-transparent placeholder:text-gray-400"
          />
          <span className="text-gray-400">/</span>
          <input
            placeholder="MM"
            maxLength={2}
            inputMode="numeric"
            onInput={enforceNumberOnly}
            className="w-full min-w-0 text-center outline-none bg-transparent placeholder:text-gray-400"
          />
          <span className="text-gray-400">/</span>
          <input
            placeholder="DD"
            maxLength={2}
            inputMode="numeric"
            onInput={enforceNumberOnly}
            className="w-full min-w-0 text-center outline-none bg-transparent placeholder:text-gray-400"
          />
        </div>
      </div>
    );
  },
);

BirthDateBox.displayName = "BirthDateBox";
export default BirthDateBox;
