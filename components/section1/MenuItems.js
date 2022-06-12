import { Close } from "@mui/icons-material";
import React from "react";
import Link from "next/link";

const MenuItems = ({ showMenu, active }) => {
  return (
    <ul
      className={
        active
          ? "flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden"
          : "hidden"
      }
    >
      <Close onClick={showMenu} className="cursor-pointer" />
      <li className="hover:text-white/20">
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li className="hover:text-white/20">
        <Link href="/">
          <a>services</a>
        </Link>
      </li>
      <li className="hover:text-white/20">
        <Link href="/">
          <a>About</a>
        </Link>
      </li>
    </ul>
  );
};

export default MenuItems;
