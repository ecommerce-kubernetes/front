import { useCategoryPath } from "@/src/hooks/useCategoryPath";
import { CategoryTree } from "@/src/types/category";
import Image from "next/image";

export const CategoryPannel = ({
  rootCategories,
}: {
  rootCategories: CategoryTree[];
}) => {
  const { columns, handleMouseEnter, clearPath } =
    useCategoryPath(rootCategories);
  return (
    <div className="border w-max border-gray-200 flex" onMouseLeave={clearPath}>
      {columns.map((columnCategories, depthIndex) => (
        <div
          key={depthIndex}
          className={`overflow-hidden border-r border-gray-200 last:border-r-0 ${depthIndex === 0 ? "w-55 opacity-100" : "animate-slide-right"}`}
        >
          <ul className="flex flex-col text-gray-500 text-base font-normal w-full max-h-180 overflow-y-auto">
            {columnCategories.map((category: CategoryTree) => {
              return (
                <li
                  key={category.id}
                  className="shrink-0 px-5 cursor-pointer hover:text-brand-primary h-12 flex items-center hover:bg-gray-100"
                  onMouseEnter={() => handleMouseEnter(category, depthIndex)}
                >
                  <div
                    className={`flex items-center flex-1 ${depthIndex === 0 ? "" : "animate-fade-in"}`}
                  >
                    {depthIndex === 0 &&
                      (category.imageUrl ? (
                        <Image
                          className="object-contain"
                          src={category.imageUrl}
                          alt="test"
                          height={24}
                          width={24}
                        />
                      ) : (
                        <div className="w-6 h-6 bg-gray-200 rounded-full" />
                      ))}
                    <span className="flex-1 pl-3 pr-5">{category.name}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};
