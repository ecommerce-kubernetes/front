"use client";
import { ProductImage } from "@/src/types/product";
import { useState } from "react";

export const ProductImageView = ({ images }: { images: ProductImage[] }) => {
  const [selectedImage, setSelectedImage] = useState<ProductImage>(() => {
    return (
      images.find((image) => image.thumbnail) ??
      images.find((image) => image.order === 1) ??
      images[0]
    );
  });
  return (
    <>
      <div className="w-full aspect-square bg-gray-50 overflow-hidden relative">
        <img
          src={selectedImage.url}
          alt="메인 상품 이미지"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-10">
        <ul className="flex justify-center gap-3">
          {images.map((image) => {
            const isSelected = image.url === selectedImage.url;
            return (
              <li key={image.order}>
                <button
                  onClick={() => setSelectedImage(image)}
                  className={`w-20 h-20 relative cursor-pointer border transition-colors ${isSelected ? "border-black" : "border-transparent hover:border-brand-primary"}`}
                >
                  <img src={image.url} className="w-full h-full object-cover" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
