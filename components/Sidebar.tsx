"use client";

import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import Box from "./Box";
import SideBarItems from "./SideBarItems";
import LibraryItem from "./LibraryItem";
import Header from "./Header";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/search",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/",
      },
    ],
    []
  );

  return (
    <div className="flex h-full">
      <div
        className="
        hidden
        md:flex
        flex-col
        gap-y-2
        bg-black
        h-full
        w-[300px]
        p-2
    "
      >
        <Box>
          <div className="flex flex-col space-y-6 py-3 px-5">
            {routes.map((item, index) => {
              return <SideBarItems key={index} {...item} />;
            })}
          </div>
        </Box>

        <Box className="overflow-y-auto h-full">
          <LibraryItem />
        </Box>
      </div>

      <main className="w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
