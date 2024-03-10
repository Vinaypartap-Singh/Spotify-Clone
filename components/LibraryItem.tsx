"use client";

import useAuthModel from "@/hooks/useAuthModel";
import { useUser } from "@/hooks/userUser";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";
import Button from "./Button";
import useUploadModel from "@/hooks/useUploadModel";

const LibraryItem = () => {
  const { user } = useUser();
  const authModel = useAuthModel();
  const uploadModel = useUploadModel();
  const onClick = () => {
    if (!user) {
      return authModel.onOpen();
    }

    return uploadModel.onOpen();
  };
  return (
    <div>
      <div className="px-6 py-3 space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <TbPlaylist size={22} className="text-neutral-500" />
            <p className="text-neutral-500">Your Library</p>
          </div>
          <Button className="bg-transparent w-fit p-0" onClick={onClick}>
            <AiOutlinePlus size={18} className="text-neutral-500" />
          </Button>
        </div>

        <div>
          <h2 className="text-neutral-500">List Of Songs</h2>
        </div>
      </div>
    </div>
  );
};

export default LibraryItem;
