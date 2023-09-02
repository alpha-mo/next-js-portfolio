import { DocMode } from "@/utils/types";
import { useEffect, useState } from "react";

const DocumentMode = ({ centered }: { centered?: boolean }) => {
  const [mode, setMode] = useState<DocMode>(getMode());
  function handleClick() {
    setMode(mode === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  return (
    <button className={`text-content-200 ${centered && "m-auto"}`} onClick={handleClick}>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" height={22}>
        {mode === "dark" ? (
          <path
            d="M16 6a.8.8 0 0 1 .8.8v3.4a.8.8 0 0 1-.8.8.8.8 0 0 1-.8-.8V6.8A.8.8 0 0 1 16 6Zm-5.9 3A.8.8 0 0 0 9 10l2.4 2.4a.8.8 0 0 0 1.4-.6c0-.2 0-.5-.2-.6L10 8.9Zm-3.3 6.2a.8.8 0 0 0 0 1.6h3.4a.8.8 0 0 0 .8-.8.8.8 0 0 0-.8-.8H6.8ZM21 16a.8.8 0 0 1 .8-.8h3.4a.8.8 0 0 1 0 1.6h-3.4a.8.8 0 0 1-.8-.8Zm-.3 3.5a.8.8 0 0 0-1.4.6c0 .2 0 .5.2.6l2.4 2.4a.8.8 0 0 0 .6.2.8.8 0 0 0 .8-1.1l-.2-.3-2.4-2.4Zm-8.2 1.2a.8.8 0 0 0 .2-.9.8.8 0 0 0-1.4-.3L8.9 22l-.2.3a.8.8 0 0 0 0 .6.8.8 0 0 0 1.4.3l2.4-2.4ZM23 10.1A.8.8 0 0 0 21.9 9l-2.4 2.4a.8.8 0 0 0-.2.9.8.8 0 0 0 .5.5.9.9 0 0 0 .6 0l.3-.2 2.4-2.4Zm-6.3 11.7a.8.8 0 0 0-.8-.8.8.8 0 0 0-.8.8v3.4a.8.8 0 0 0 1.6 0v-3.4Zm-.8-10a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4Z"
            className="fill-content-100"
          />
        ) : (
          <path
            d="M12 8.1c0 6.7 4.5 12 10 12 1.5 0 2.8-.2 4-.8-1.5 3.9-5.2 6.7-9.7 6.7C10.6 26 6 21.3 6 15.5c0-4.2 2.5-7.9 6.1-9.5L12 8.1Z"
            className="fill-content-100"
          />
        )}
        <path
          d="M31.5 4c0-2-1.6-3.5-3.5-3.5H4C2 .5.5 2.1.5 4v24c0 2 1.6 3.5 3.5 3.5h24c2 0 3.5-1.6 3.5-3.5V4Z"
          fill="none"
          strokeWidth="2"
          className="stroke-divider-200"
        />
      </svg>
    </button>
  );
};

export default DocumentMode;

function getMode(): DocMode {
  let output: DocMode = "dark";
  if (typeof window != "undefined") output = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  return output;
}
