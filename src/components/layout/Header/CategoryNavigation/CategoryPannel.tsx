import { CategoryTree } from "@/src/types/category";
import Image from "next/image";

export const CategoryPannel = ({
  rootCategories,
}: {
  rootCategories: CategoryTree[];
}) => {
  return (
    <div className="border border-gray-200 flex">
      <ul className="flex flex-col text-gray-500 text-base font-normal w-60 max-h-180 overflow-y-auto">
        {rootCategories.map((category: CategoryTree) => (
          <li
            key={category.id}
            className="shrink-0 px-5 cursor-pointer hover:text-brand-primary h-12 flex items-center hover:bg-gray-100"
          >
            <div className="flex items-center flex-1">
              {category.imageUrl ? (
                <Image
                  className="object-contain"
                  src={category.imageUrl}
                  alt="test"
                  height={24}
                  width={24}
                />
              ) : (
                <div className="w-6 h-6 bg-gray-200 rounded-full" />
              )}
              <span className="flex-1 pl-3 pr-5">{category.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
