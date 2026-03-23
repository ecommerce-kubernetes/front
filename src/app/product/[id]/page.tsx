import { ProductBasicInfo } from "@/src/components/products/ProductBasicInfo";
import { ProductImageView } from "@/src/components/products/ProductImageView";
import { ProductDetail } from "@/src/types/product";
import { X } from "lucide-react";

export default function ProductDetailPage() {
  const mockProduct: ProductDetail = {
    id: 1,
    name: "아이폰 16",
    categoryId: 1,
    description: "상품 설명",
    price: 9000,
    originalPrice: 10000,
    discountRate: 10,
    rating: 3.0,
    reviewCount: 1020,
    popularityScore: 3.5,
    optionGroups: [
      {
        optionTypeId: 1,
        name: "사이즈",
        priority: 1,
        values: [
          {
            optionValueId: 1,
            name: "XL",
          },
        ],
      },
      {
        optionTypeId: 2,
        name: "용량",
        priority: 2,
        values: [
          {
            optionValueId: 2,
            name: "256GB",
          },
        ],
      },
    ],
    images: [
      {
        url: "https://cdn.it.chosun.com/news/photo/202412/2023092129833_402646_552.png",
        order: 1,
        thumbnail: true,
      },
      {
        url: "https://istore.xcache.kinxcdn.com/prd/data/goods/1/2025/02/135_temp_17403760727119large.jpg",
        order: 2,
        thumbnail: false,
      },
    ],
    variants: [],
  };
  return (
    <div className="w-full max-w-250 mx-auto flex items-center py-5 flex-col">
      <section className="w-full flex gap-20">
        <div className="w-112.5 flex flex-col select-none">
          <ProductImageView images={mockProduct.images} />
        </div>
        <div className="flex-1">
          <ProductBasicInfo product={mockProduct} />
          <div className="flex flex-col gap-6 w-full">
            {/* 1. 옵션 선택 영역 (위에서 아래로 순차적 선택) */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">
                  색상
                </label>
                <select className="w-full border border-gray-300 rounded-sm p-3 text-sm outline-none focus:border-brand-primary cursor-pointer appearance-none bg-white">
                  <option value="">색상을 선택하세요</option>
                  <option value="black">블랙</option>
                  <option value="white">화이트</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">
                  사이즈
                </label>
                <select className="w-full border border-gray-300 rounded-sm p-3 text-sm outline-none focus:border-brand-primary cursor-pointer appearance-none bg-white">
                  <option value="">사이즈를 선택하세요</option>
                  <option value="s">Small</option>
                  <option value="m">Medium</option>
                </select>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* 2. 선택된 상품 카드 영역 (옵션을 다 고르면 배열(Array)을 map 돌려서 렌더링할 부분) */}
            <div className="flex flex-col gap-3">
              {/* 선택된 아이템 카드 1 */}
              <div className="bg-gray-50 border border-gray-200 rounded-sm p-4 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <span className="text-sm font-medium text-gray-800">
                    블랙 / Medium
                  </span>
                  {/* 삭제 버튼 */}
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <X size={16} />
                  </button>
                </div>

                <div className="flex justify-between items-end">
                  {/* 수량 조절 컨트롤러 */}
                  <div className="flex items-center border border-gray-300 rounded-sm bg-white">
                    <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 border-r border-gray-300 transition-colors">
                      -
                    </button>
                    <span className="w-10 text-center text-sm font-medium">
                      1
                    </span>
                    <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 border-l border-gray-300 transition-colors">
                      +
                    </button>
                  </div>
                  {/* 개별 아이템 총 가격 */}
                  <span className="font-bold text-gray-900">29,000원</span>
                </div>
              </div>

              {/* 만약 사용자가 '화이트/Small'을 하나 더 선택했다면 여기에 카드가 하나 더 붙습니다! */}
            </div>
            <div className="flex justify-between items-end pt-2 border-t border-gray-900 mt-2">
              <span className="font-medium text-gray-700">총 상품 금액</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-brand-primary">
                  29,000
                </span>
                <span className="text-sm font-medium text-gray-600">원</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
