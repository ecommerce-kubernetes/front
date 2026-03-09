export interface Category {
  id: number;
  name: string;
  parentId: number | null;
  depth: number;
  imageUrl: string | null;
}

export interface CategoryTree extends Category {
  children: CategoryTree[];
}

export interface CategoryNavigation {
  current: Category;
  path: Category[];
  siblings: Category[];
  children: Category[];
}
