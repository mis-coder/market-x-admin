"use client";

import StoreModal from "@/components/modals/store-modal";
import useMounted from "@/hooks/use-mounted";

export const ModalProvider = () => {
  const { isMounted } = useMounted();

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <StoreModal />
    </>
  );
};
