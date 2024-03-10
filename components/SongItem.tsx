"use client";
import React from "react";
import { Song } from "@/types";
import useLoadImage from "@/hooks/useLoadImage";
import Image from "next/image";
import PlayButton from "./PlayButton";

interface SongItemProps {
  data: Song;
  onClick: (id: string) => void;
}

const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
  const imagePath = useLoadImage(data);
  return (
    <div
      onClick={() => onClick(data.id)}
      className="
  relative
  group
  flex
  flex-col
  items-center
  justify-center
  rounded-md
  overflow-hidden
  gap-x-4
  bg-neutral-400/5
  cursor-pointer
  hover:bg-neutral-400/10
    transition-all
    p-3
  "
    >
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        <Image
          src={imagePath || "/images/liked.png"}
          alt=""
          className="object-cover"
          fill
        />
      </div>
      <div className="w-full p-3">
        <p className="font-bold text-2xl">{data.title}</p>
        <p className="turncate text-neutral-300">by {data.author}</p>
      </div>
      <div className="absolute bottom-24 right-5">
        <PlayButton />
      </div>
    </div>
  );
};

export default SongItem;
