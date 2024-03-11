"use client";

import LikedButton from "@/components/LikedButton";
import MediaItem from "@/components/MediaItem";
import { Song } from "@/types";

interface SearchContentProps {
  songs: Song[];
}

const SearchContent = ({ songs }: SearchContentProps) => {
  if (songs.length === 0) {
    return (
      <div
        className="
            flex
            flex-col
            gap-y-2
            w-dull
            px-6
            text-neutral-400
            "
      >
        No Songs Found
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((song, index) => (
        <div key={index} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem onClick={() => {}} songs={song} />
          </div>
          <LikedButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
