import { useCategoryQuery } from "@/src/hooks/queries/useCategoryQuery";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Menu } from "lucide-react";

export const CategoryNavigation = () => {
  const { data: categories = [], isLoading, isError } = useCategoryQuery();
  return (
    <div className="w-25 h-full flex items-center">
      <NavigationMenu.Root
        delayDuration={100}
        className="relative w-full h-full flex items-center z-50"
      >
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="flex items-center gap-2 justify-between cursor-pointer outline-none bg-transparent border-none p-0">
              <Menu size={24} />
              <span>카테고리</span>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <ul className="border border-gray-200 flex flex-col text-gray-500 text-base font-normal max-h-[calc(48px*15)] overflow-y-auto">
                <li className="shrink-0 px-5 cursor-pointer hover:text-brand-primary h-12 flex items-center hover:bg-gray-100">
                  <div className="flex items-center flex-1">
                    <img
                      className="w-6 h-6 object-contain"
                      src={
                        "https://collection-image.kurly.com/site-category-groups/306/f7d0c8a2-5956-443d-aa64-ce6deae929cf.png"
                      }
                    />
                    <span className="flex-1 pl-3 pr-5">식품</span>
                  </div>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>
        <div className="absolute top-[calc(100%+1px)] left-0 w-60">
          <NavigationMenu.Viewport className="relative w-full bg-white shadow-lg overflow-hidden h-[var(--radix-navigation-menu-viewport-height)] transition-[width,height] duration-300" />
        </div>
      </NavigationMenu.Root>
    </div>
  );
};
