import { CategoryTree } from "@/src/types/category";
import { act, renderHook } from "@testing-library/react";
import { describe, it } from "vitest";
import { useCategoryPath } from "../useCategoryPath";
import { expect } from "vitest";

const mockCategories: CategoryTree[] = [
  {
    id: 1,
    name: "카테고리1",
    parentId: null,
    depth: 1,
    imageUrl: null,
    children: [
      {
        id: 2,
        name: "카테고리1_1",
        parentId: 1,
        depth: 2,
        imageUrl: null,
        children: [],
      },
    ],
  },
  {
    id: 3,
    name: "카테고리2",
    parentId: null,
    depth: 1,
    imageUrl: null,
    children: [],
  },
];

describe("useCategoryPath 테스트", () => {
  it("초기에는 호버 카테고리는 비어있어야 하고 columns 크기는 1 이여야 한다", () => {
    //given
    const categories = mockCategories;
    //when
    const { result } = renderHook(() => useCategoryPath(categories));
    //then

    //초기 hoveredPath는 빈 배열
    expect(result.current.hoveredPath).toEqual([]);
    //초기 columns 사이즈는 1
    expect(result.current.columns).toHaveLength(1);
    //초기 columns는 상위 카테고리
    expect(result.current.columns[0]).toEqual(categories);
  });

  it("자식이 있는 메뉴 호버시 경로가 추가되고 colums 가 증가 한다", () => {
    //given
    const categories = mockCategories;
    //when
    const { result } = renderHook(() => useCategoryPath(categories));
    // 첫번째 요소가 호버됨
    act(() => {
      result.current.handleMouseEnter(categories[0], 0);
    });
    //then
    //첫번째 카테고리 hover 되면 hover 경로는 첫번째 카테고리
    expect(result.current.hoveredPath).toEqual([categories[0]]);
    //요소가 호버되면 columns는 2
    expect(result.current.columns).toHaveLength(2);
    //새로 확장된 카테고리는 호버된 카테고리의 자식 카테고리
    expect(result.current.columns[1]).toEqual(categories[0].children);
  });

  it("자식이 없는 메뉴 호버시 경로가 추가되지 않고 colums가 증가하지 않는다", () => {
    //given
    const categories = mockCategories;
    //when
    const { result } = renderHook(() => useCategoryPath(categories));
    //두번째 요소가 호버됨
    act(() => {
      result.current.handleMouseEnter(categories[1], 0);
    });
    //then
    //두번째 카테고리가 호버되면 hover 경로는 두번째 카테고리
    expect(result.current.hoveredPath).toEqual([categories[1]]);
    //자식이 없는 카테고리는 colums가 증가하지 않는다
    expect(result.current.columns).toHaveLength(1);
  });

  it("depth가 다른 메뉴를 호버시 이전 경로가 새로 호버된 카테고리 경로로 덮혀씌워진다", () => {
    //given
    const categories = mockCategories;
    //when
    const { result } = renderHook(() => useCategoryPath(categories));
    //첫번째 요소가 호버됨 A
    act(() => {
      result.current.handleMouseEnter(categories[0], 0);
    });
    //첫번째 요소가 호버되고 해당 요소의 하위 카테고리가 호버됨 A -> A_1
    act(() => {
      result.current.handleMouseEnter(categories[0].children![0], 1);
    });
    expect(result.current.hoveredPath).toHaveLength(2);
    //depth 가 다른 요소가 호버됨 B
    act(() => {
      result.current.handleMouseEnter(categories[1], 0);
    });
    //then
    //depth가 다른 메뉴 호버시 경로가 덮혀씌워진다
    expect(result.current.hoveredPath).toEqual([categories[1]]);
    //depth가 줄었으므로 columns 는 1
    expect(result.current.columns).toHaveLength(1);
    //이전 columns 요소로
    expect(result.current.columns[0]).toEqual(categories);
  });

  it("마우스가 밖으로 나가면 모든 경로가 지워지고 초기화 된다", () => {
    //given
    const categories = mockCategories;
    //when
    const { result } = renderHook(() => useCategoryPath(categories));
    //첫번째 요소가 호버됨 A
    act(() => {
      result.current.handleMouseEnter(categories[0], 0);
    });
    //마우스 아웃됨
    act(() => {
      result.current.clearPath();
    });
    expect(result.current.hoveredPath).toEqual([]);
    expect(result.current.columns).toHaveLength(1);
    expect(result.current.columns[0]).toEqual(categories);
  });
});
