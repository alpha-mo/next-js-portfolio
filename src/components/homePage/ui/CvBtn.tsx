"use client";

import Link from "next/link";

const CvBtn = async () => {
  return (
    <Link
      download={"ojailcv /files/OjailCV.pdf"}
      href={"files/OjailCV.pdf"}
      title="Ojail-CV"
      target="_blank"
      prefetch={false}
      className="text-content-100 border border-divider-200 rounded-md w-full hover:shadow-nav hover:bg-base-hover py-1 flex justify-center items-center"
    >
      Download my CV
    </Link>
  );
};

export default CvBtn;
