import { ProductDetail } from "@/src/types/product";
import { X } from "lucide-react";
import { SelectBox } from "../common/SelectBox";

export interface ProductOptionSelectorProps {
  product: Pick<ProductDetail, "name" | "optionGroups" | "variants">;
}

export const ProductOptionSelector = ({
  product,
}: ProductOptionSelectorProps) => {
  const { name, optionGroups, variants } = product;
  const isSingleProduct = !optionGroups || optionGroups.length === 0;
  return (
    <div className="flex flex-col gap-6 w-full">
      {!isSingleProduct && (
        <div className="flex flex-col gap-3">
          {optionGroups.map((group) => {
            const mappedSelectProps = {
              type: group.name,
              options: group.values.map((v) => ({
                name: v.name,
                value: v.optionValueId,
              })),
            };
            return (
              <div key={group.optionTypeId} className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">
                  {group.name}
                </label>
                <SelectBox selectProps={mappedSelectProps} />
              </div>
            );
          })}
        </div>
      )}

      {!isSingleProduct && <hr className="border-gray-200" />}

      <div className="flex flex-col gap-3">
        <div className="bg-gray-50 border border-gray-200 rounded-sm p-4 flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <span className="text-sm font-medium text-gray-800">
              블랙 / Medium
            </span>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <X size={16} />
            </button>
          </div>

          <div className="flex justify-between items-end">
            <div className="flex items-center border border-gray-300 rounded-sm bg-white">
              <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 border-r border-gray-300 transition-colors">
                -
              </button>
              <span className="w-10 text-center text-sm font-medium">1</span>
              <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 border-l border-gray-300 transition-colors">
                +
              </button>
            </div>
            <span className="font-bold text-gray-900">29,000원</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-end pt-2 border-t border-gray-900 mt-2">
        <span className="font-medium text-gray-700">총 상품 금액</span>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-brand-primary">29,000</span>
          <span className="text-sm font-medium text-gray-600">원</span>
        </div>
      </div>
    </div>
  );
};
