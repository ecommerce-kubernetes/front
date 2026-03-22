import { MessageCircle, Star } from "lucide-react";

export default function ProductDetailPage() {
  return (
    <div className="w-full max-w-250 mx-auto flex items-center py-5 flex-col">
      <section className="w-full flex gap-10">
        <div className="w-112.5 flex flex-col">
          <img src="https://cdn.it.chosun.com/news/photo/202412/2023092129833_402646_552.png" />
          <div className="mt-10">
            <ul className="flex justify-center gap-3">
              <li>
                <button className="w-20 h-20 cursor-pointer border border-transparent hover:border-brand-primary">
                  <img src="https://cdn.it.chosun.com/news/photo/202412/2023092129833_402646_552.png" />
                </button>
              </li>
              <li>
                <button className="w-20 h-20 cursor-pointer border border-transparent hover:border-brand-primary">
                  <img src="https://cdn.it.chosun.com/news/photo/202412/2023092129833_402646_552.png" />
                </button>
              </li>
              <li>
                <button className="w-20 h-20 cursor-pointer border border-transparent hover:border-brand-primary">
                  <img src="https://cdn.it.chosun.com/news/photo/202412/2023092129833_402646_552.png" />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-xl font-medium font-pretendard mb-4">
            상품 이름
          </h1>
          <div className="border-t">
            <div className="flex items-center gap-2 py-2 mb-5">
              <div className="flex items-center gap-0.5">
                <Star
                  width={14}
                  height={14}
                  className="text-brand-primary fill-brand-primary"
                />
                <span className="text-sm">4.3</span>
              </div>
              <div className="flex items-center gap-0.5">
                <MessageCircle
                  width={14}
                  height={14}
                  className="text-brand-primary fill-brand-primary"
                />
                <span className="text-sm">100</span>
              </div>
            </div>
            <div className="flex flex-col mb-5">
              <div className="flex gap-3">
                <span className="text-brand-primary font-bold text-xl">
                  {10}%
                </span>
                <span className="line-through font-medium text-gray-500 text-xl">
                  {Number(20000).toLocaleString()}원
                </span>
              </div>
              <div>
                <span className="font-bold text-brand-primary text-2xl">
                  {Number(18000).toLocaleString()}원
                </span>
              </div>
            </div>
            <div className="grid grid-cols-[100px_1fr] items-center gap-y-4 gap-x-2">
              <div className="text-sm font-medium text-gray-700">옵션1</div>
              <div className="w-full border border-gray-300 rounded-sm p-2">
                옵션 select box
              </div>

              <div className="text-sm font-medium text-gray-700">옵션2</div>
              <div className="w-full border border-gray-300 rounded-sm p-2">
                옵션 select box
              </div>

              <div className="text-sm font-medium text-gray-700">옵션3</div>
              <div className="w-full border border-gray-300 rounded-sm p-2">
                옵션 select box
              </div>

              <div className="text-sm font-medium text-gray-700">구매 수량</div>
              <div className="w-full border border-gray-300 rounded-sm p-2">
                수량 선택
              </div>
              <div>추천 버튼</div>
              <div>장바구니 담기 버튼</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
