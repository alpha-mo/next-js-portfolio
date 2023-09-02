import Link from "next/link";

const Heading = () => {
  return (
    <>
      <p className="text-content-100 mt-4 mb-2">
        Last may I graduated from Yrkesakademin Academy as
        <span className="text-link ml-1 inline">
          <Link href={"https://ya.se/yrkeshogskola/systemutvecklare-java/"} target="_blank">
            System-Developer (Java)
            <svg width={12} height={12} className="inline align-top ml-1">
              <use href="/svg/ui_icons/externalLink.svg#ext-link" strokeWidth={3} className="stroke-link" />
            </svg>
          </Link>
        </span>
        .
      </p>
      <p className="text-content-100">
        To verify/download the diploma I provided a link on True-original
        <span className="text-link ml-1 inline-block ">
          <Link href={"https://true.ya.se/examensbevis-ya-2-mohamad-ojail-115132/?modal=1&lang=en"} target="_blank" className="text-link">
            here
            <svg width={12} height={12} className="inline align-top ml-1">
              <use href="/svg/ui_icons/externalLink.svg#ext-link" strokeWidth={3} className="stroke-link" />
            </svg>
          </Link>
        </span>
        .
      </p>
    </>
  );
};

export default Heading;
