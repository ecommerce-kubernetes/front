"use client";
import { CartItem } from "@/src/components/cart/CartItem";
import CheckBox from "@/src/components/common/CheckBox";
import { useCartDelete, useCartFetch } from "@/src/hooks/queries/useCartQuery";
import { useCheckBox } from "@/src/hooks/useCheckBox";
import { toast } from "sonner";

export default function CartPage() {
  const { data: cartData } = useCartFetch();
  const { mutate: deleteItems } = useCartDelete();
  const itemsId = cartData?.map((item) => item.id) || [];
  const {
    checkedIds,
    isAllChecked,
    handleToggleAll,
    handleToggleItem,
    handleRemoveItem,
    clearChecked,
  } = useCheckBox(itemsId);
  const checkedItem = cartData?.filter((item) => checkedIds.includes(item.id));
  const { totalOriginalPrice, totalDiscountAmount } = (
    checkedItem ?? []
  ).reduce(
    (acc, item) => {
      acc.totalOriginalPrice += item.price.originalPrice * item.quantity;
      acc.totalDiscountAmount += item.price.discountAmount * item.quantity;
      return acc;
    },
    { totalOriginalPrice: 0, totalDiscountAmount: 0 },
  );
  const totalFinalPrice =
    (totalOriginalPrice || 0) - (totalDiscountAmount || 0);

  const handleDeleteSelected = () => {
    if (checkedIds.length === 0) {
      return toast.error("삭제할 상품을 선택해주세요", {
        className: "font-pretendard",
        id: "cart-item-error",
        position: "top-center",
        duration: 1500,
      });
    }
    deleteItems(checkedIds);
    clearChecked();
  };

  const handleDeleteSingleItem = (id: number) => {
    deleteItems([id]);
    handleRemoveItem(id);
  };

  return (
    <div className="w-full bg-gray-100 min-h-screen select-none">
      <div className="max-w-250 mx-auto px-10 pb-20">
        <div className="sticky top-15 z-30 bg-gray-100 pt-10 pb-6">
          <h1 className="text-2xl font-medium font-pretendard">장바구니</h1>
        </div>

        <div className="flex items-start w-full gap-10">
          <section className="flex-1 flex flex-col relative">
            <div className="sticky top-15 z-20 bg-gray-100 pt-25 -mt-25">
              <div className="bg-white border flex items-center justify-between border-gray-200 px-5 py-4 rounded-t-lg shadow-sm">
                <div className="flex gap-2">
                  <CheckBox checked={isAllChecked} onChange={handleToggleAll} />
                  <span className="font-pretendard font-medium text-sm">
                    전체 선택
                  </span>
                </div>
                <button
                  className="items-center border font-pretendard rounded-sm border-gray-400 cursor-pointer px-1.5 py-0.5 text-sm"
                  onClick={handleDeleteSelected}
                >
                  선택 삭제
                </button>
              </div>
            </div>
            <ul className="bg-white border-x border-b border-gray-200 px-5 rounded-b-lg min-h-100 flex flex-col gap-5 divide-y divide-gray-200">
              {cartData?.map((item) => (
                <li key={item.id} className="py-5">
                  <CartItem
                    item={item}
                    isChecked={checkedIds.includes(item.id)}
                    onToggle={handleToggleItem}
                    onDelete={handleDeleteSingleItem}
                  />
                </li>
              ))}
            </ul>
          </section>
          <section className="sticky top-40 w-80 px-2 pt-5 pb-2 bg-white rounded-lg shadow-sm">
            <h1 className="font-pretendard font-medium text-lg mb-4">
              구매 금액
            </h1>
            <div className="flex flex-col text-sm font-pretendard gap-1.5 mb-2.5 pb-5 border-b border-gray-300">
              <div className="flex justify-between">
                <span>상품 금액</span>
                <span>{totalOriginalPrice.toLocaleString("ko-KR")} 원</span>
              </div>
              <div className="flex justify-between">
                <span>할인 금액</span>
                <span>{totalDiscountAmount.toLocaleString("ko-KR")} 원</span>
              </div>
            </div>
            <div className="flex justify-between font-pretendard">
              <span className="text-lg">총 결제 금액</span>
              <span className="font-bold text-xl text-brand-primary">
                {totalFinalPrice.toLocaleString("ko-KR")} 원
              </span>
            </div>
            <button className="py-3 mt-10 rounded-lg cursor-pointer w-full bg-brand-primary text-white">
              주문하기
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
