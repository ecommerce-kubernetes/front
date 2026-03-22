export interface PaginatedList<T> {
  items: T[];
  currentPage: number;
  totalPage: number;
  pageSize: number;
  totalCount: number;
}
