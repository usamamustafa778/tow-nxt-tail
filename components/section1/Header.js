import { MenuOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import Link from "next/link";
import MenuItems from "./MenuItems";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import ServicesMenu from './ServicesMenu'
const Header = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="fixed flex items-center justify-between w-full p-4 text-gray-100">
      <Image src={logo} alt="Picture of the author" width={180} height={40} />
      <nav>
        <div className="absolute scale-150 right-6 md:hidden top-6">
          <MenuOutlined
            onClick={showMenu}
            className="scale-150 cursor-pointer"
          />
        </div>

        <ul className="hidden gap-12 p-6 uppercase md:flex bg-white/10 ">
          <li className="hover:text-white/90">
            <Link href="/">
              <a className="hover:underline decoration-4">Home</a>
            </Link>
            
          </li>
          <li className="hover:text-white/90">
          <ServicesMenu />
          </li>
          <li className="hover:text-white/90">
            <Link href="/">
              <a className="hover:underline decoration-4">About</a>
            </Link>
          </li>

        </ul>

        <MenuItems showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
};

export default Header;
