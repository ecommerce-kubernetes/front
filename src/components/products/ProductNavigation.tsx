import { ProductContentTabType } from "./ProductContentTab";

interface ProductNavigationProps {
  active: ProductContentTabType;
  setActive: (tab: ProductContentTabType) => void;
}
const TABS: { id: ProductContentTabType; label: string }[] = [
  { id: "description", label: "상품 설명" },
  { id: "reviews", label: "상품 리뷰" },
  { id: "qna", label: "상품 문의" },
];
export const ProductNavigation = ({
  active,
  setActive,
}: ProductNavigationProps) => {
  return (
    <div className="sticky top-15 z-10 w-full">
      <div className="flex font-pretendard font-medium">
        {TABS.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`
                flex-1 cursor-pointer py-5 border-gray-300 
                border-t border-r first:border-l 
                ${
                  isActive
                    ? "bg-white border-b-transparent"
                    : "bg-gray-100 border-b"
                }
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
