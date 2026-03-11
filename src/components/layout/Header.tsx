"use client";
import { useEffect, useRef, useState } from "react";
import Logo from "../common/Logo";
import { User, ShoppingCart, Menu } from "lucide-react";
import Link from "next/link";
import SearchBar from "../common/SearchBar";
import { useSearch } from "@/src/hooks/useSearch";

const UserMenu = () => (
  <div className="flex gap-5">
    <Link href="/">
      <User size={30} />
    </Link>
    <Link href="/">
      <ShoppingCart size={30} />
    </Link>
  </div>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const [navInitialTop, setNavInitialTop] = useState(0);
  const { keyword, setKeyword, handleClear, handleSearch } = useSearch();

  useEffect(() => {
    if (navRef.current) {
      setNavInitialTop(navRef.current.offsetTop);
    }

    const handleScroll = () => {
      if (window.scrollY > navInitialTop) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navInitialTop]);

  return (
    <>
      {/** 상단 헤더 */}
      <header className="w-full bg-white select-none">
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
            <Logo className="w-40 text-brand-primary shrink-0" />
            <SearchBar
              keyword={keyword}
              onChange={setKeyword}
              onClear={handleClear}
              onSubmit={handleSearch}
            />
            <UserMenu />
          </div>
        </div>
      </header>
      {/** 네비게이션 바 */}
      <nav
        ref={navRef}
        className="w-full bg-white border-b border-base-line sticky top-0 z-50 shadow-sm font-pretendard font-medium text-lg select-none"
      >
        <div className="w-full max-w-250 mx-auto h-15 flex items-center">
          <div className="w-25 h-full flex items-center">
            <button className="flex w-full items-center gap-2 justify-between cursor-pointer">
              <Menu size={24} />
              <span>카테고리</span>
            </button>
          </div>
          <div className="flex flex-1 justify-start h-full items-center">
            <ul className="flex ml-10">
              <li className="w-32 flex justify-center">
                <Link href="/">인기 상품</Link>
              </li>
              <li className="w-32 flex justify-center">
                <Link href="/">특가 상품</Link>
              </li>
              <li className="w-32 flex justify-center">
                <Link href="/">신규 상품</Link>
              </li>
            </ul>
            {isScrolled && (
              <div className="h-full flex items-center flex-1 justify-between">
                <SearchBar
                  keyword={keyword}
                  onChange={setKeyword}
                  onClear={handleClear}
                  onSubmit={handleSearch}
                  wrapperClassName="h-10 w-70 transition-all animate-in fade-in"
                  inputClassName="pl-3 pr-8 text-sm"
                  iconSize={20}
                />
                <UserMenu />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
