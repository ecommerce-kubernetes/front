import { useCategoryQuery } from "@/src/hooks/queries/useCategoryQuery";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Menu } from "lucide-react";
import { CategoryPannel } from "./CategoryPannel";
import Loading from "@/src/components/common/Loading";

export const CategoryNavigation = () => {
  const { data: rootCategories = [], isLoading } = useCategoryQuery();
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
              {isLoading ? (
                <div className="w-56 h-12 flex items-center justify-center bg-white border border-gray-200">
                  <Loading />
                </div>
              ) : (
                <CategoryPannel rootCategories={rootCategories} />
              )}
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>
        <div className="absolute top-[calc(100%+1px)] left-0">
          <NavigationMenu.Viewport className="relative w-full bg-white shadow-lg overflow-hidden h-(--radix-navigation-menu-viewport-height) transition-[width,height] duration-300" />
        </div>
      </NavigationMenu.Root>
    </div>
  );
};
