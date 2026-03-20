import { http, HttpResponse } from "msw";
import { MOCK_CATEGORIES, MOCK_PRODUCTS } from "../data/productData";

const BASE_URL = "http://127.0.0.1:8000/product-service";

export const productHandlers = [
  http.get(`${BASE_URL}/categories/tree`, () => {
    return HttpResponse.json(MOCK_CATEGORIES);
  }),

  http.get(`${BASE_URL}/products*`, () => {
    return HttpResponse.json(MOCK_PRODUCTS);
  }),
];
