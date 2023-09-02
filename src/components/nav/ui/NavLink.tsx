import { useMobileMenuStore } from "@/state/navState";
import { NavRoute } from "@/utils/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NavLink = ({ routeObj }: { routeObj: NavRoute }) => {
  const { setIsOpen, isOpen } = useMobileMenuStore();
  const activePath = usePathname();

  const [isCurrent, setIsCurrent] = useState(activePath === "/");

  useEffect(() => {
    setIsCurrent(activePath === routeObj.url);
  }, [activePath]);

  return (
    <Link href={routeObj.url} className={`${isCurrent && (isOpen ? "link-current-mobile" : "link-current")} link`} onClick={() => setIsOpen(false)}>
      {routeObj.text}
    </Link>
  );
};

export default NavLink;
