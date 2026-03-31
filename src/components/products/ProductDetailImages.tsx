import { ProductDetailImage } from "@/src/types/product";

export interface ProductDetailImagesProps {
  images: ProductDetailImage[];
}
export const ProductDetailImages = ({ images }: ProductDetailImagesProps) => {
  return (
    <div className="w-full flex flex-col">
      {images.map((image) => (
        <div key={image.order} className="relative w-full">
          <img src={image.url} className="w-full h-auto block" />
        </div>
      ))}
    </div>
  );
};
