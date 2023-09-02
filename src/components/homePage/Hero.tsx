import { content } from "@/content/home/cards";
import Image from "next/image";
import profilePic from "@/../public/pix/mo-rounded.jpg";
import HomeButtons from "./ui/Buttons";
import CvBtn from "./ui/CvBtn";

const HeroSection = () => {
  const data = content.find((item) => item.url === "/");
  return (
    <article className="grid grid-rows-[repeat(4,content-fit)] gap-3 max-w-[59ch]">
      <div className="relative aspect-square h-20 rounded-full overflow-hidden -scale-x-100">
        <Image src={profilePic} alt="profile picture" fill className="z-0" />
      </div>
      <p className="text-content-100 text-2xl font-bold">{data?.title}</p>
      <p className="text-content-100 max-w-[59ch]">{data?.body}</p>
      <div className="flex flex-col gap-4 tablet:flex-row">
        <HomeButtons />
        <CvBtn />
      </div>
    </article>
  );
};

export default HeroSection;
