import Link from "next/link";

import { ShoppingCart, User } from "lucide-react";
import { useCartToastStore } from "@/src/store/useCartToastStore";
import { CartToast } from "../../toast/CartToast";

interface UserMenuProps {
  showToast?: boolean;
}

export const UserMenu = ({ showToast = true }: UserMenuProps) => {
  const { isOpen, addedItem } = useCartToastStore();
  return (
    <ul data-testid="user-menu" className="flex gap-5">
      <li>
        <Link href="/">
          <User size={30} />
        </Link>
      </li>
      <li className="relative flex items-center">
        <Link href="/">
          <ShoppingCart size={30} />
        </Link>
        {showToast && isOpen && addedItem && <CartToast item={addedItem} />}
      </li>
    </ul>
  );
};
