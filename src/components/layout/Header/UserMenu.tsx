import Link from "next/link";

import { ShoppingCart, User } from "lucide-react";
import { useCartToastStore } from "@/src/store/useCartToastStore";
import { CartToast } from "../../toast/CartToast";
import { useAuthStore } from "@/src/store/useAuthStore";
import { useCartFetch } from "@/src/hooks/queries/useCartQuery";

interface UserMenuProps {
  showToast?: boolean;
}

export const UserMenu = ({ showToast = true }: UserMenuProps) => {
  const { isOpen, addedItem } = useCartToastStore();
  const { isLoggedIn } = useAuthStore();
  const { data: cartData } = useCartFetch({ enabled: isLoggedIn });
  const cartItemCount = cartData?.length || 0;
  return (
    <ul data-testid="user-menu" className="flex gap-5">
      <li>
        <Link href="/">
          <User size={30} />
        </Link>
      </li>
      <li className="relative flex items-center">
        <Link href="/cart" className="relative">
          <ShoppingCart size={30} />
          {isLoggedIn && cartItemCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-brand-primary text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              {cartItemCount}
            </span>
          )}
        </Link>
        {showToast && isOpen && addedItem && <CartToast item={addedItem} />}
      </li>
    </ul>
  );
};
