import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";

const LibraryItem = () => {
  return (
    <div>
      <div className="px-6 py-3 space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <TbPlaylist size={22} className="text-neutral-500" />
            <p className="text-neutral-500">Your Library</p>
          </div>
          <AiOutlinePlus size={18} className="text-neutral-500" />
        </div>

        <div>
          <h2 className="text-neutral-500">List Of Songs</h2>
        </div>
      </div>
    </div>
  );
};

export default LibraryItem;
