export interface PageResponse<T> {
  content: T[];
  currentPage: number;
  totalPage: number;
  pageSize: number;
  totalElement: number;
}
