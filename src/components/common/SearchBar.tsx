"use client";

import { Search, X } from "lucide-react";

interface SearchBarProps {
  keyword: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClear: () => void;

  wrapperClassName?: string;
  inputClassName?: string;
  iconSize?: number;
}

export default function SearchBar({
  keyword,
  onChange,
  onSubmit,
  onClear,
  wrapperClassName = "h-12 w-130",
  inputClassName = "px-5 pr-10",
  iconSize = 24,
}: SearchBarProps) {
  return (
    <form
      onSubmit={onSubmit}
      className={`border border-brand-primary rounded-full flex justify-between items-center ${wrapperClassName}`}
    >
      <div className="relative flex-1 h-full flex items-center">
        <input
          type="text"
          placeholder="상품을 검색하세요"
          value={keyword}
          onChange={(e) => onChange(e.target.value)}
          className={`outline-none flex-1 font-normal h-full bg-transparent ${inputClassName}`}
        />
        {keyword && (
          <button
            type="button"
            onClick={onClear}
            className="absolute cursor-pointer right-2 text-gray-400 hover:text-brand-primary transition-colors"
          >
            <X size={20} />
          </button>
        )}
      </div>
      <button
        type="submit"
        className="px-4 h-full cursor-pointer rounded-r-full bg-brand-primary"
      >
        <Search className="text-white" size={iconSize} />
      </button>
    </form>
  );
}
