"use client";

import { useUser } from "@/hooks/userUser";
import { Song } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import MediaItem from "./MediaItem";
import useOnPlay from "@/hooks/useOnPlay";

interface LikedButtonProps {
  songs: Song[];
}

const LikedContent = ({ songs }: LikedButtonProps) => {
  const router = useRouter();
  const { isLoading, user } = useUser();
  const onPlay = useOnPlay(songs);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/");
    }
  }, [isLoading, router, user]);

  if (songs.length === 0) {
    return (
      <div
        className="
        flex
        flex-col
        gap-y-2
        w-full
        px-6
        text-neutral-400
        "
      >
        No Liked Songs
      </div>
    );
  }

  return (
    <div
      className="
    flex
    flex-col
    gap-y-2
    w-full
    px-6
    text-neutral-400
    "
    >
      {songs.map((song, index) => {
        return (
          <div key={index} className="flex items-center gap-x-4 w-full">
            <div className="flex-1">
              <MediaItem songs={song} onClick={(id: string) => onPlay(id)} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LikedContent;
