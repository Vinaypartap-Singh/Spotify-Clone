"use client";

import AuthModel from "@/components/AuthModel";
import Modal from "@/components/Modal";
import React, { useEffect, useState } from "react";

const ModelProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isMounted) {
    return (
      <>
        <AuthModel />
      </>
    );
  }

  return <></>;
};

export default ModelProvider;
