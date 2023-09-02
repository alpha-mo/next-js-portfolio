import { navRoutes } from "@/utils/navRoutes";
import NavLink from "./ui/NavLink";
import DocumentMode from "./ui/Mode";

const MenuFull = () => {
  return (
    <ul className="hidden laptop:flex items-center gap-4 border-2 border-divider-200 px-4 py-2 rounded-tl-2xl rounded-br-2xl bg-base-hover">
      {navRoutes.map((appRoute) => {
        if (appRoute.url === "/") return;
        return (
          <li key={appRoute.url}>
            <NavLink routeObj={{ url: appRoute.url, text: appRoute.text }} />
          </li>
        );
      })}
      <div className="bg-divider-200 w-[2px] h-4" />
      <DocumentMode />
    </ul>
  );
};

export default MenuFull;
