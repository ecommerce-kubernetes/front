import { addCart } from "@/src/api/cart";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useAddCartMutation = () => {
  return useMutation({
    mutationFn: addCart,
    onError: (error) => {
      if (error instanceof Error && error.message === "UNAUTHORIZED") {
        console.log("로그인 만료");
      } else {
        console.log("에러");
      }
    },
  });
};
