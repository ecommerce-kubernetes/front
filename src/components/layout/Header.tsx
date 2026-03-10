"use client";
import { useState } from "react";
import Logo from "../common/Logo";
import { Search, X, User, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [keyword, setKeyword] = useState("");
  const handleClear = () => {
    setKeyword("");
  };
  return (
    <>
      <header className="w-full bg-white">
        <div className="w-full max-w-250 mx-auto">
          <div className="flex justify-end h-8">
            <ul className="flex text-xs text-black h-full">
              <li className="after:content-['|'] after:mx-2 after:text-gray-300 last:after:content-none h-full flex items-center cursor-pointer">
                회원가입
              </li>
              <li className="after:content-['|'] after:mx-2 after:text-gray-300 last:after:content-none h-full flex items-center cursor-pointer">
                로그인
              </li>
              <li className="after:content-['|'] after:mx-2 after:text-gray-300 last:after:content-none h-full flex items-center cursor-pointer">
                고객센터
              </li>
            </ul>
          </div>
          <div className="flex justify-between items-center mt-5">
            <Logo className="w-40 text-brand-primary flex-shrink-0" />
            <form className="border border-brand-primary rounded-full h-12 w-130 flex justify-between items-center">
              <div className="relative flex-1 h-full flex items-center">
                <input
                  type="text"
                  placeholder="상품을 검색하세요"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="outline-none flex-1 h-full bg-transparent px-5 pr-10"
                />
                {keyword && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="absolute cursor-pointer right-2 text-gray-400 hover:text-brand-primary transition-colors"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
              <button
                type="submit"
                className="px-4 h-full cursor-pointer rounded-r-full bg-brand-primary font-bold"
              >
                <Search className="text-white" size={24} strokeWidth={2} />
              </button>
            </form>
            <div className="flex gap-5">
              <Link href="/">
                <User size={30} />
              </Link>
              <Link href="/">
                <ShoppingCart size={30} />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <nav className="w-full bg-white border-b sticky top-0 z-50 shadow-sm">
        네비게이션 (카테고리, 베스트 등)
      </nav>
    </>
  );
}
