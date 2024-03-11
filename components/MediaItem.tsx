import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";
import React from "react";

interface MediaItemProps {
  songs: Song;
  onClick: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({ songs, onClick }) => {
  const imageURL = useLoadImage(songs);

  const handleClick = () => {
    if (onClick) {
      return onClick(songs.id);
    }
  };
  return (
    <div
      onClick={handleClick}
      className="
    flex
    items-center
    gap-x-3
    cursor-pointer
    hover:bg-neutral-800/50
    w-full
    p-2
    rounded-md
    "
    >
      <div
        className="
      relative
      rounded-md
      min-h-[48px]
      min-w-[48px]
      overflow-hidden
      "
      >
        <Image
          src={imageURL || "/images/liked.png"}
          fill
          alt="Song"
          className="object-cover"
        />
      </div>
      <div
        className="
      flex
      flex-col
      gap-y-1
      overflow-hidden
      "
      >
        <p
          className="
        text-white truncate
        "
        >
          {songs.title}
        </p>
        <p
          className="
        text-neutral-500 truncate
        "
        >
          by {songs.author}
        </p>
      </div>
    </div>
  );
};

export default MediaItem;
