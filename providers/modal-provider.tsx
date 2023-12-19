"use client";

import useMounted from "@/hooks/use-mounted";
import StoreModal from "../components/modals/store-modal";

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
