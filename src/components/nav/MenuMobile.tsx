import { useMobileMenuStore } from "@/state/navState";
import Burger from "./ui/Burger";
import { navRoutes } from "@/utils/navRoutes";
import NavLink from "./ui/NavLink";
import React, { useEffect, useRef } from "react";
import DocumentMode from "./ui/Mode";

const MenuMobile = () => {
  const { isOpen: isOpen } = useMobileMenuStore();

  return (
    <div className="laptop:hidden">
      <Burger />
      <>
        <ul
          className={`absolute ${
            isOpen ? "top-[140%]" : "top-[-800%]"
          } left-1/2 -translate-x-1/2 w-[70%] p-8 border border-divider-200 rounded-lg bg-base-100 z-50 transition-[top] duration-300 ease-in-out delay-150 flex flex-col gap-4`}
        >
          <li>
            <DocumentMode centered />
          </li>
          <li className="bg-divider-300 h-[2px] w-[80%] m-auto" />
          {navRoutes.map((appRoute) => {
            if (appRoute.url === "/") return;
            return (
              <li key={appRoute.url}>
                <NavLink routeObj={{ url: appRoute.url, text: appRoute.text }} />
              </li>
            );
          })}
        </ul>
        <div
          className={`absolute top-full ${
            isOpen ? "left-0" : "-left-full"
          } w-full h-[calc(100vh-72px)] bg-base-backdrop z-40 transition-[left] duration-150 ease-in-out`}
        />
      </>
    </div>
  );
};

export default MenuMobile;
