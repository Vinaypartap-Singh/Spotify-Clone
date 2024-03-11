"use client";

import useAuthModel from "@/hooks/useAuthModel";
import { useUser } from "@/hooks/userUser";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";
import Button from "./Button";
import useUploadModel from "@/hooks/useUploadModel";
import { Song } from "@/types";
import MediaItem from "./MediaItem";
import useOnPlay from "@/hooks/useOnPlay";

interface libraryItemProps {
  songs: Song[];
}

const LibraryItem: React.FC<libraryItemProps> = ({ songs }) => {
  const { user } = useUser();
  const authModel = useAuthModel();
  const uploadModel = useUploadModel();
  const onPlay = useOnPlay(songs);
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
          {songs.map((song) => (
            <MediaItem songs={song} onClick={(id: string) => onPlay(id)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibraryItem;
