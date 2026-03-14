import { MAIN_NAV_DATA } from "@/src/constants/header-navigation";
import Link from "next/link";

export const MainMenu = () => {
  return (
    <ul className="flex ml-10">
      {MAIN_NAV_DATA.map((data) => (
        <li key={data.name} className="w-32 flex justify-center">
          <Link href={data.href}>{data.name}</Link>
        </li>
      ))}
    </ul>
  );
};
