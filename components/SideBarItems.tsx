import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SideBarItemsProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

function SideBarItems({ icon: Icon, label, active, href }: SideBarItemsProps) {
  return (
    <Link
      href={href}
      className={twMerge(
        `
  flex
  flex-row
  text-neutral-500
  hover:text-white
  cursor-pointer
  w-full
  gap-x-4
  items-center
`,
        active && "text-white"
      )}
    >
      <Icon size={24} /> <p className="truncate w-full">{label}</p>
    </Link>
  );
}

export default SideBarItems;
