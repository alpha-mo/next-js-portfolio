"use client";

import MenuFull from "./MenuFull";
import MenuMobile from "./MenuMobile";
import HomeLink from "./ui/Logo";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-full px-8 shadow-nav sticky top-0 bg-base-100 z-50 w-full laptop:w-2/3 m-auto">
      <HomeLink />
      <MenuFull />
      <MenuMobile />
    </nav>
  );
};

export default Navbar;
