import { useState } from "react";

export const useCartQuantity = (id: number, initialQuantity: number) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  return {
    quantity,
    handleDecrease,
    handleIncrease,
  };
};
