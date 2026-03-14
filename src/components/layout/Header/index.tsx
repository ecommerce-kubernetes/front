"use client";
import { useEffect, useRef, useState } from "react";
import Logo from "../../common/Logo";
import SearchBar from "../../common/SearchBar";
import { useSearch } from "@/src/hooks/useSearch";
import { UserMenu } from "./UserMenu";
import { CategoryNavigation } from "./CategoryNavigation";
import { UtilityMenu } from "./UtilityMenu";
import { MainMenu } from "./MainMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { keyword, setKeyword, handleClear, handleSearch } = useSearch();

  useEffect(() => {
    const THRESHOLD = 120;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const timer = setTimeout(() => {
      handleScroll();
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/** 상단 헤더 */}
      <header className="w-full bg-white select-none">
        <div className="w-full max-w-250 mx-auto">
          <div className="flex justify-end h-8">
            <UtilityMenu />
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
      <nav className="w-full bg-white border-b border-base-line sticky top-0 z-header shadow-sm font-pretendard font-medium text-lg select-none">
        <div className="w-full max-w-250 mx-auto h-15 flex items-center">
          <CategoryNavigation />
          <div className="flex flex-1 justify-start h-full items-center">
            <ul className="flex ml-10">
              <MainMenu />
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
