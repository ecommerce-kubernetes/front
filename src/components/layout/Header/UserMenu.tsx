import Link from "next/link";

import { USER_MENU_DATA } from "@/src/constants/header-navigation";

export const UserMenu = () => {
  return (
    <ul data-testid="user-menu" className="flex gap-5">
      {USER_MENU_DATA.map((data) => {
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
