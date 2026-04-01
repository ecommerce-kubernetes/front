import { useModal } from "@/src/hooks/queries/useModal";
import { Star, X } from "lucide-react";

export const ReviewList = () => {
  const mockImage = [
    "https://img-cf.kurly.com/hdims/resize/%5E%3E240x%3E240/cropcenter/240x240/quality/85/src/shop/data/review/20251102/116f50c9-b3d3-422d-9157-65fc62bc694e.jpg",
    "https://img-cf.kurly.com/hdims/resize/%5E%3E240x%3E240/cropcenter/240x240/quality/85/src/shop/data/review/20251102/116f50c9-b3d3-422d-9157-65fc62bc694e.jpg",
    "https://img-cf.kurly.com/hdims/resize/%5E%3E240x%3E240/cropcenter/240x240/quality/85/src/shop/data/review/20251102/116f50c9-b3d3-422d-9157-65fc62bc694e.jpg",
    "https://img-cf.kurly.com/hdims/resize/%5E%3E240x%3E240/cropcenter/240x240/quality/85/src/shop/data/review/20251102/116f50c9-b3d3-422d-9157-65fc62bc694e.jpg",
    "https://img-cf.kurly.com/hdims/resize/%5E%3E240x%3E240/cropcenter/240x240/quality/85/src/shop/data/review/20251102/116f50c9-b3d3-422d-9157-65fc62bc694e.jpg",
  ];

  const MAX_DISPLAY = 4;
  const hasMoreImage = mockImage.length > MAX_DISPLAY;
  const extraCount = mockImage.length - MAX_DISPLAY;
  const { isModalOpen, modalOpen, modalClose } = useModal();

  return (
    <>
      <div className="flex flex-col">
        <div className="select-none">
          <h1 className="font-pretendard font-medium text-lg">최민식</h1>
          <div className="flex items-center gap-1">
            <Star
              width={16}
              height={16}
              className="text-brand-primary fill-brand-primary"
            />
            <span className="leading-none">3</span>
            <span className="text-sm leading-none text-gray-500">
              2026-12-25
            </span>
          </div>
          <ul className="mt-5 flex items-center font-pretendard font-medium text-gray-500">
            <li className="after:content-['/'] after:mx-1 after:text-gray-300 last:after:content-none">
              BLUE
            </li>
            <li className="after:content-['/'] after:mx-1 after:text-gray-300 last:after:content-none">
              256GB
            </li>
          </ul>
          <p className="mt-5">정말 좋은 상품이에요</p>
          <ul className="flex mt-5 gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {mockImage.slice(0, MAX_DISPLAY).map((imgUrl, index) => {
              const isLastVisibleImage = index === MAX_DISPLAY - 1;
              return (
                <li
                  key={index}
                  className="relative shrink-0 w-25 h-25 rounded-md overflow-hidden cursor-pointer"
                  onClick={modalOpen}
                >
                  <img className="w-full h-full object-cover" src={imgUrl} />
                  {isLastVisibleImage && hasMoreImage && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-medium text-lg">
                      +{extraCount}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <div className="w-200 h-170 bg-white rounded-2xl flex items-center justify-center relative">
              <button
                className="absolute top-3 right-3 cursor-pointer"
                onClick={modalClose}
              >
                <X width={32} height={32} />
              </button>
              <div className="flex flex-col gap-10 items-center">
                <div className="relative shrink-0 w-100 h-120 rounded-md overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={
                      "https://img-cf.kurly.com/hdims/resize/%5E%3E240x%3E240/cropcenter/240x240/quality/85/src/shop/data/review/20251102/116f50c9-b3d3-422d-9157-65fc62bc694e.jpg"
                    }
                  />
                </div>
                <div>
                  <ul className="flex gap-2">
                    {mockImage.map((image, index) => (
                      <li key={index} className="w-12 h-12 cursor-pointer">
                        <img
                          className="w-full h-full object-cover"
                          src={image}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
