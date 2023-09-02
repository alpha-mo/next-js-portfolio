import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useMobileMenuStore } from "@/state/navState";

export default function HomeLink() {
  const { setIsOpen: setIsOpen } = useMobileMenuStore();
  const activePath = usePathname();

  const [isCurrent, setIsCurrent] = useState(activePath === "/");

  useEffect(() => {
    setIsCurrent(activePath === "/");
  }, [activePath]);

  return (
    <Link href={"/"} onClick={() => setIsOpen(false)}>
      <svg viewBox="0 0 402 182" xmlns="http://www.w3.org/2000/svg" height={24} className="hover:scale-110 z-50">
        <path
          d="M0 181V19L5.3 0h85.2l29.2 28.8h49.6v-10L174.5 0H250l24.3 37.5V19L279.5 0h122.3v104.5l-3.3 5.8 3.3 3.7v48.2l-5.2 18.9H0ZM169.3 46.2h-53L87 17.4H24.8v136.5h38.5V50.6h14.4V154h38.5V79.4h14.4v74.5h38.7V46ZM379.5 154v-36.4l-21.8-21.4h21.8V17.4h-38.7v55h-14.4v-55H288v50.3l21.5 21H288V154h38.3v-41.5h14.4V154h38.7Zm-105.2-92-28.9-44.5h-62.3v136.5h38.3V96H236V154h38.3V99.2l.2-.4v-9l-.2-.1V61.9ZM236 72.4h-14.6v-28l14.6 28Z"
          className={`${isCurrent ? "fill-primary" : "fill-secondary"}`}
        />
        <path
          d="M169.3 46.1h-53L87 17.4H24.8v136.5h38.5V50.6h14.4V154h38.5V79.4h14.4v74.5h38.7V46ZM379.5 154v-36.4l-21.8-21.4h21.8V17.4h-38.7v55h-14.4v-55H288v50.3l21.5 21H288V154h38.3v-41.5h14.4V154h38.7Zm-105.2-92-28.9-44.5h-62.3v136.5h38.3V96H236V154h38.3V99.2l.2-.4v-9l-.2-.1V61.9ZM236 72.4h-14.6v-28l14.6 28Z"
          fill="#fff"
        />
      </svg>
    </Link>
  );
}
