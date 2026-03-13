"use client";
import { useEffect, useRef, useState } from "react";
import Logo from "../../common/Logo";
import Link from "next/link";
import SearchBar from "../../common/SearchBar";
import { useSearch } from "@/src/hooks/useSearch";
import { UserMenu } from "./UserMenu";
import { CategoryNavigation } from "./CategoryNavigation";
import {
  UTILITY_NAV_DATA,
  MAIN_NAV_DATA,
  USER_MENU_DATA,
} from "@/src/constants/header-navigation";

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
              {UTILITY_NAV_DATA.map((data) => (
                <li
                  key={data.name}
                  className="after:content-['|'] after:mx-2 after:text-gray-300 last:after:content-none h-full flex items-center cursor-pointer"
                >
                  <Link href={data.href}>{data.name}</Link>
                </li>
              ))}
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
            <UserMenu items={USER_MENU_DATA} />
          </div>
        </div>
      </header>
      {/** 네비게이션 바 */}
      <nav
        ref={navRef}
        className="w-full bg-white border-b border-base-line sticky top-0 z-50 shadow-sm font-pretendard font-medium text-lg select-none"
      >
        <div className="w-full max-w-250 mx-auto h-15 flex items-center">
          <CategoryNavigation />
          <div className="flex flex-1 justify-start h-full items-center">
            <ul className="flex ml-10">
              {MAIN_NAV_DATA.map((data) => (
                <li key={data.name} className="w-32 flex justify-center">
                  <Link href={data.href}>{data.name}</Link>
                </li>
              ))}
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
                <UserMenu items={USER_MENU_DATA} />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
