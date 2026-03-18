import { http, HttpResponse } from "msw";

const BASE_URL = "http://127.0.0.1:8000";

export const handlers = [
  http.post(`${BASE_URL}/user-service/auth/logout`, () => {
    return HttpResponse.json(null, { status: 204 });
  }),

  http.post(`${BASE_URL}/user-service/auth/login`, () => {
    return HttpResponse.json({
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJidXluZXN0LXVzZXItc2VydmljZSIsInN1YiI6MSwiaWF0IjoxNzEwODMwMDAwLCJleHAiOjE3MTA4MzM2MDAsImVtYWlsIjoibGE5ODE0QG5hdmVyLmNvbSIsIm5hbWUiOiLstZzrr7zsi50iLCJyb2xlIjoiUk9MRV9BRE1JTiIsInRva2VuX3R5cGUiOiJBQ0NFU1MifQ.NuwrjBvsQU2gI54hEgeh4QwjofghfCbBKHw0AgUsSiY",
    });
  }),

  http.get(`${BASE_URL}/product-service/categories/tree`, () => {
    return HttpResponse.json([
      {
        id: 1,
        name: "패션/의류",
        depth: 1,
        parentId: null,
        imageUrl: null,
      },
    ]);
  }),

  http.get(`${BASE_URL}/product-service/products*`, () => {
    return HttpResponse.json({
      content: [
        {
          productId: 1,
          name: "상품1",
          thumbnail:
            "https://cdn.it.chosun.com/news/photo/202412/2023092129833_402646_552.png",
          displayPrice: 3000,
          originalPrice: 3300,
          maxDiscountRate: 10,
          categoryId: 1,
          publishedAt: "1010",
          rating: 4.1,
          reviewCount: 100,
          status: "ON_SALE",
        },
        {
          productId: 2,
          name: "상품2",
          thumbnail:
            "https://cdn.it.chosun.com/news/photo/202412/2023092129833_402646_552.png",
          displayPrice: 3000,
          originalPrice: 3300,
          maxDiscountRate: 10,
          categoryId: 1,
          publishedAt: "1010",
          rating: 4.1,
          reviewCount: 100,
          status: "ON_SALE",
        },
        {
          productId: 3,
          name: "상품3",
          thumbnail:
            "https://cdn.it.chosun.com/news/photo/202412/2023092129833_402646_552.png",
          displayPrice: 3000,
          originalPrice: 3300,
          maxDiscountRate: 10,
          categoryId: 1,
          publishedAt: "1010",
          rating: 4.1,
          reviewCount: 100,
          status: "ON_SALE",
        },
        {
          productId: 4,
          name: "상품4",
          thumbnail:
            "https://cdn.it.chosun.com/news/photo/202412/2023092129833_402646_552.png",
          displayPrice: 3000,
          originalPrice: 3300,
          maxDiscountRate: 10,
          categoryId: 1,
          publishedAt: "1010",
          rating: 4.1,
          reviewCount: 100,
          status: "ON_SALE",
        },
        {
          productId: 5,
          name: "상품5",
          thumbnail:
            "https://cdn.it.chosun.com/news/photo/202412/2023092129833_402646_552.png",
          displayPrice: 3000,
          originalPrice: 3300,
          maxDiscountRate: 10,
          categoryId: 1,
          publishedAt: "1010",
          rating: 4.1,
          reviewCount: 100,
          status: "ON_SALE",
        },
      ],
      currentPage: 1,
      totalPage: 1,
      pageSize: 20,
      totalElement: 1,
    });
  }),
];
