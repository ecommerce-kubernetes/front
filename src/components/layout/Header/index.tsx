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
  const navRef = useRef<HTMLElement>(null);
  const [navInitialTop, setNavInitialTop] = useState(0);
  const { keyword, setKeyword, handleClear, handleSearch } = useSearch();

  //TODO 새로고침 시에는 유저 메뉴와 서치바가 네비게이션 바에 사라지는 현상 수정
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
      <nav
        ref={navRef}
        className="w-full bg-white border-b border-base-line sticky top-0 z-header shadow-sm font-pretendard font-medium text-lg select-none"
      >
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
