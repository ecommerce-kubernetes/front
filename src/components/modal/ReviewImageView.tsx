import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

interface ReviewImageViewProps {
  mockImage: string[];
  initialIndex: number;
  close: () => void;
}

export const ReviewImageView = ({
  mockImage,
  initialIndex,
  close,
}: ReviewImageViewProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : mockImage.length - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev < mockImage.length - 1 ? prev + 1 : 0));
  };
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-200 h-170 bg-white rounded-2xl flex items-center justify-center relative">
          <button
            className="absolute top-3 right-3 cursor-pointer"
            onClick={close}
          >
            <X width={32} height={32} />
          </button>
          <div className="flex flex-col gap-10 items-center">
            <div className="relative shrink-0 w-125 h-100 rounded-md overflow-hidden select-none bg-gray-50 flex items-center justify-center">
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full cursor-pointer shadow-sm"
              >
                <ChevronLeft width={24} height={24} />
              </button>

              <img
                className="w-full h-full object-contain"
                src={mockImage[currentIndex]}
                alt="리뷰 상세 이미지"
              />
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full cursor-pointer shadow-sm"
              >
                <ChevronRight width={24} height={24} />
              </button>
            </div>
            <div>
              <ul className="flex gap-2">
                {mockImage.map((image, index) => {
                  const isSelected = currentIndex === index;
                  return (
                    <li key={index}>
                      <button
                        onClick={() => setCurrentIndex(index)}
                        className={`w-20 h-20 relative cursor-pointer border transition-colors ${isSelected ? "border-black" : "border-transparent hover:border-brand-primary"}`}
                      >
                        <img
                          className="w-full h-full object-cover"
                          src={image}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
