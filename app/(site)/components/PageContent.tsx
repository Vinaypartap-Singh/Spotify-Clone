"use client";
import React from "react";

import { Song } from "@/types";
import SongItem from "@/components/SongItem";

interface PageContentProps {
  songs: Song[];
}

const PageContent: React.FC<PageContentProps> = ({ songs }) => {
  if (songs.length === 0) {
    return (
      <div className="flex justify-center items-center h-full">
        <p>No Songs Found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-4">
      {songs.map((song) => (
        <SongItem key={song.id} onClick={() => {}} data={song} />
      ))}
    </div>
  );
};

export default PageContent;
