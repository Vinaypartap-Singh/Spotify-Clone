"use client";

import Modal from "@/components/Modal";
import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

interface ModelProviderProps {
  children: React.ReactNode;
  isOpen: boolean;
  title: string;
  description: string;
}

const ModelProvider: React.FC<ModelProviderProps> = ({
  children,
  isOpen,
  title,
  description,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isMounted) {
    return (
      <>
        <Modal />
      </>
    );
  }

  return <></>;
};

export default ModelProvider;
