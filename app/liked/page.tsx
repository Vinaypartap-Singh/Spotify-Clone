import getLikedSongs from "@/actions/getLikedSongs";
import Header from "@/components/Header";
import LikedContent from "@/components/LikedContent";
import Image from "next/image";
import { useRouter } from "next/router";

const revalidate = 0;

const likedSong = async () => {
  const songs = await getLikedSongs();
  return (
    <div
      className="
        bg-neutral-900
        rounded-lg
        h-full
        w-full
        overflow-hidden
        overflow-y-auto
    "
    >
      <Header>
        <div className="mt-20">
          <div
            className="
            flex
            flex-col
            md:flex-row
            items-center
            gap-x-5
            "
          >
            <div
              className="relative
            h-32
            w-32
            lg:w-34
            lg:h-34"
            >
              <Image src={"/images/liked.png"} fill alt="Image" />
            </div>
            <div className="">
              <p>Playlist</p>
              <h1
                className="
              text-white
              text-4xl
              font-semibold
              sm:text-5xl
              lg:text-7xl

              "
              >
                Liked Songs
              </h1>
            </div>
          </div>
        </div>
      </Header>
      <LikedContent songs={songs} />
    </div>
  );
};

export default likedSong;
