"use client";
import { ProductImage } from "@/src/types/product";
import Image from "next/image";
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
        <Image
          src={selectedImage.url}
          alt="상품 이미지"
          fill
          className="object-cover"
        />
      </div>
      <div className="mt-10">
        <ul className="flex justify-center gap-3">
          {images.map((image) => {
            const isSelected = image.url === selectedImage.url;
            return (
              <li key={image.id}>
                <button
                  onClick={() => setSelectedImage(image)}
                  className={`w-20 h-20 relative cursor-pointer border transition-colors ${isSelected ? "border-black" : "border-transparent hover:border-brand-primary"}`}
                >
                  <Image
                    alt="상품 프리뷰 이미지"
                    fill
                    src={image.url}
                    className="object-cover"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
