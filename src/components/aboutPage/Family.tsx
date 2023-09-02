import Image from "next/image";

import { articles } from "@/content/about/aboutMeArticles";
import family from "@/../public/pix/about/family.jpg";

const Family = () => {
  const article = articles.find((art) => art.variant === "family");

  return (
    <li>
      <p className="text-primary text-2xl font-bold text-center mb-2">{article?.title}</p>
      <div className="w-full flex flex-col items-center gap-4">
        <Image alt="Max changing a bulb" src={family} className="rounded-md" />
        <p className="text-content-100 max-w-[300px] mb-4">{article?.text}</p>
      </div>
    </li>
  );
};

export default Family;
