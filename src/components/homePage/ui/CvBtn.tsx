"use client";

import Link from "next/link";

const CvBtn = async () => {
  return (
    <div className="text-content-100 w-full py-1 flex justify-center items-center gap-4 border border-divider-200 rounded-lg">
      <p>Download my CV</p>
      <div className="flex gap-2">
        <Link
          download={"Ojail-CV /files/cv/en/en-Ojail-CV.pdf"}
          href={"/files/cv/en/en-Ojail-CV.pdf"}
          title="English version"
          target="_blank"
          prefetch={false}
          className="border border-divider-200 hover:bg-base-hover px-2 rounded-md hover:shadow-nav"
        >
          En
        </Link>
        <Link
          download={"Ojail-CV /files/cv/sv/sv-Ojail-CV.pdf"}
          href={"/files/cv/sv/sv-Ojail-CV.pdf"}
          title="Svenska"
          target="_blank"
          prefetch={false}
          className="border border-divider-200 hover:bg-base-hover px-2 rounded-md hover:shadow-nav"
        >
          Sv
        </Link>
      </div>
    </div>
  );
};

export default CvBtn;
