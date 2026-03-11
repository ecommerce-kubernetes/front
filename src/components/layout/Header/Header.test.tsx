import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import Header from ".";
import { useSearch } from "@/src/hooks/useSearch";

// useSearch 훅 모킹
vi.mock("@/src/hooks/useSearch");

describe("Header 단위 테스트", () => {
  // useSearch 훅 함수 모킹
  const mockSetKeyword = vi.fn();
  const mockHandleClear = vi.fn();
  const mockHandleSearch = vi.fn();

  //모킹 설정
  beforeEach(() => {
    vi.mocked(useSearch).mockReturnValue({
      keyword: "",
      //setKeyword 호출시 mockSetKeyword 호출
      setKeyword: mockSetKeyword,
      //handleClear 호출시 mockHandleClear 호출
      handleClear: mockHandleClear,
      //handleSearch 호출시 mockHandleSearch 호출
      handleSearch: mockHandleSearch,
    });
  });

  //테스트 후 초기화 (호출 기록 초기화)
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("초기 랜더링시 메인 검색창과 유저 메뉴는 하나이다", () => {
    render(<Header />);
    const searchInputs = screen.getAllByPlaceholderText("상품을 검색하세요");
    const userMenus = screen.getAllByTestId("user-menu");
    expect(searchInputs).toHaveLength(1);
    expect(userMenus).toHaveLength(1);
  });

  it("검색창에 상품 입력시 setKeyword 함수가 호출된다", () => {
    render(<Header />);
    const searchInput = screen.getAllByPlaceholderText("상품을 검색하세요")[0];

    fireEvent.change(searchInput, { target: { value: "사과" } });

    expect(mockSetKeyword).toHaveBeenCalledTimes(1);
    expect(mockSetKeyword).toHaveBeenCalledWith("사과");
  });

  it("스크롤을 내리면 네비게이션 바에 검색창과 유저 메뉴가 추가되고 스크롤을 올리면 사라진다", () => {
    render(<Header />);
    //일정 스크롤 내렸을때
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    expect(screen.getAllByPlaceholderText("상품을 검색하세요")).toHaveLength(2);
    expect(screen.getAllByTestId("user-menu")).toHaveLength(2);

    //스크롤 최상단으로 올렸을때
    fireEvent.scroll(window, { target: { scrollY: 0 } });
    expect(screen.getAllByPlaceholderText("상품을 검색하세요")).toHaveLength(1);
    expect(screen.getAllByTestId("user-menu")).toHaveLength(1);
  });
});
