import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface UserMenuItem {
  name: string;
  icon: LucideIcon;
  href: string;
}

interface UserMenuProps {
  items: UserMenuItem[];
}

export const UserMenu = ({ items }: UserMenuProps) => {
  return (
    <ul data-testid="user-menu" className="flex gap-5">
      {items.map((data) => {
        const IconComponent = data.icon;
        return (
          <li key={data.name}>
            <Link href={data.href}>
              <IconComponent size={30} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
