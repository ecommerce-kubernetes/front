import { useAuthStore } from "@/src/store/useAuthStore";
import Link from "next/link";

import { UTILITY_MENU_DATA } from "@/src/constants/header-navigation";

export const UtilityMenu = () => {
  const { isLoggedIn, user } = useAuthStore();
  return (
    <ul className="flex text-xs text-black h-full">
      {isLoggedIn ? (
        <>
          <li className="after:content-['|'] after:mx-2 after:text-gray-300 last:after:content-none h-full flex items-center gap-2">
            <Link className="cursor-pointer" href={"/orders"}>
              {user?.name}
            </Link>
            <button
              type="button"
              className="border px-0.5 text-gray-400 cursor-pointer"
            >
              로그아웃
            </button>
          </li>
          <li className="after:content-['|'] after:mx-2 after:text-gray-300 last:after:content-none h-full flex items-center">
            <Link className="cursor-pointer" href={"/"}>
              고객 센터
            </Link>
          </li>
        </>
      ) : (
        UTILITY_MENU_DATA.map((data) => (
          <li
            key={data.name}
            className="after:content-['|'] after:mx-2 after:text-gray-300 last:after:content-none h-full flex items-center"
          >
            <Link className="cursor-pointer" href={data.href}>
              {data.name}
            </Link>
          </li>
        ))
      )}
    </ul>
  );
};
