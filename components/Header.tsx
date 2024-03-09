"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  const handleLogOut = () => {};

  return (
    <div
      className={twMerge(
        `
        h-fit
        bg-gradient-to-b
        from-emerald-800
        p-6
    `,
        className
      )}
    >
      <div className="flex justify-between items-center mb-4 w-full">
        <div className="hidden md:flex justify-between w-full">
          <div className="flex gap-x-2 items-center">
            <button className="rounded-full bg-black p-2">
              <MdKeyboardArrowLeft size={22} onClick={() => router.back()} />
            </button>
            <button className="rounded-full bg-black p-2">
              <MdKeyboardArrowRight
                size={22}
                onClick={() => router.forward()}
              />
            </button>
          </div>
          <div className="space-x-2">
            <Button className="bg-transparent font-medium text-white">
              Sign Up
            </Button>
            <Button
              onClick={() => {}}
              className="bg-white font-medium py-3 px-8"
            >
              Log In
            </Button>
          </div>
        </div>

        <div className="flex md:hidden gap-x-2 justify-between w-full">
          <div className="flex gap-x-2 items-center">
            <button className="rounded-full bg-black p-4">
              <AiOutlineHome size={18} onClick={() => router.back()} />
            </button>
            <button className="rounded-full bg-black p-4">
              <AiOutlineSearch size={18} onClick={() => router.back()} />
            </button>
          </div>

          <div className="space-x-2">
            <div>
              <Button className="bg-transparent font-medium text-white">
                Sign Up
              </Button>
              <Button
                onClick={() => {}}
                className="bg-white font-medium py-3 px-8"
              >
                Log In
              </Button>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
