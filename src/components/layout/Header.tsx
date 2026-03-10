export default function Header() {
  return (
    <>
      <header className="w-full bg-white">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="flex justify-end h-8">
            <ul className="flex gap-4 text-xs text-black h-full">
              <li className="h-full flex items-center cursor-pointer">
                회원가입
              </li>
              <li className="h-full flex items-center cursor-pointer">
                로그인
              </li>
              <li className="h-full flex items-center cursor-pointer">
                고객센터
              </li>
            </ul>
          </div>
          <div className="h-20 flex items-center">
            로고, 장바구니, 마이페이지, 검색바 영역
          </div>
        </div>
      </header>

      <nav className="w-full bg-white border-b sticky top-0 z-50 shadow-sm">
        네비게이션 (카테고리, 베스트 등)
      </nav>
    </>
  );
}
