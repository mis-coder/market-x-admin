"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const RootPage = () => {
  const { isOpen, onOpen } = useStoreModal();

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return <div className="p-4">Root Page</div>;
};

export default RootPage;
