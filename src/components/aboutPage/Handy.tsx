import { articles } from "@/content/about/aboutMeArticles";
import lamp from "@/../public/pix/about/lamp.jpeg";
import train from "@/../public/pix/about/train.jpeg";
import roof from "@/../public/pix/about/roof.jpg";
import Image from "next/image";

const Handy = () => {
  const article = articles.find((art) => art.variant === "handy");

  return (
    <li className="w-full">
      <p className="text-primary text-2xl font-bold text-center mb-2">{article?.title}</p>
      <div className="w-full flex flex-wrap justify-center gap-4">
        <div className="flex flex-col gap-4">
          <Image alt="Max changing a bulb" src={lamp} className="rounded-md" />
          <p className="text-content-100 max-w-[300px]">{article?.text[0]}</p>
        </div>
        <div className="flex flex-col gap-4">
          <Image alt="Max fixing the roof" src={roof} className="rounded-md" />
          <p className="text-content-100 max-w-[300px]">{article?.text[1]}</p>
        </div>
        <div className="flex flex-col gap-4">
          <Image alt="Max driving a train" src={train} className="rounded-md" />
          <p className="text-content-100 max-w-[300px]">{article?.text[2]}</p>
        </div>
      </div>
      <div className="bg-divider-300 w-11/12 h-[2px] my-4 m-auto" />
    </li>
  );
};

export default Handy;
