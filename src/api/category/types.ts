export interface CategoryResponse {
  id: number;
  name: string;
  parentId: number | null;
  depth: number;
  imagePath: string | null;
}

export interface CategoryTreeResponse extends CategoryResponse {
  children: CategoryTreeResponse[];
}
