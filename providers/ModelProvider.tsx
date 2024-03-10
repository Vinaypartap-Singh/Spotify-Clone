"use client";

import AuthModel from "@/components/AuthModel";
import UploadModel from "@/components/UploadModel";
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
        <UploadModel />
      </>
    );
  }

  return <></>;
};

export default ModelProvider;
