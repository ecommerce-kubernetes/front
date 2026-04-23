import { fetchProductDetail } from "@/src/api/product";
import { ProductBasicInfo } from "@/src/components/products/ProductBasicInfo";
import { ProductContentTab } from "@/src/components/products/ProductContentTab";
import { ProductImageView } from "@/src/components/products/ProductImageView";
import { ProductOptionSelector } from "@/src/components/products/ProductOptionSelector";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const productId = Number(resolvedParams.id);
  if (isNaN(productId)) {
    notFound();
  }
  const product = await fetchProductDetail(productId);
  if (!product) {
    notFound();
  }
  return (
    <div className="w-full max-w-250 mx-auto flex items-center py-5 flex-col">
      <section className="w-full flex gap-20 mb-20">
        <div className="w-112.5 flex flex-col select-none">
          <ProductImageView images={product.images} />
        </div>
        <div className="flex-1">
          <ProductBasicInfo product={product} />
          <ProductOptionSelector product={product} />
        </div>
      </section>
      <section className="w-full">
        <ProductContentTab product={product} />
      </section>
    </div>
  );
}
