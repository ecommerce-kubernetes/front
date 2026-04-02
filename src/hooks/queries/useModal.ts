import { useCallback, useState } from "react";

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const modalOpen = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const modalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return {
    isModalOpen,
    modalOpen,
    modalClose,
  };
};
