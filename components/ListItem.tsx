"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { IoPlay } from "react-icons/io5";

interface ListItemProps {
  name: string;
  image: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ name, image, href }) => {
  const router = useRouter();

  const onClick = () => {
    // add auth logic here
    router.push(href);
  };
  return (
    <div className="relative flex group items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4">
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image className="object-cover" fill src={image} alt={name} />
      </div>
      <p className="truncate">{name}</p>
      <div className="absolute transition opacity-0 rounded-full flex items-center justify-center bg-green-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110">
        <IoPlay color="black" />
      </div>
    </div>
  );
};

export default ListItem;
