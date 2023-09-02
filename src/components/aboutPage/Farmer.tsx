import Image from "next/image";

import { articles } from "@/content/about/aboutMeArticles";
import plant_1 from "@/../public/pix/about/plant-1.jpg";
import plant_2 from "@/../public/pix/about/plant-2.jpg";
import plant_3 from "@/../public/pix/about/plant-3.jpg";

const Farmer = () => {
  const article = articles.find((art) => art.variant === "farming");

  return (
    <li className="w-full">
      <p className="text-primary text-2xl font-bold text-center mb-2">{article?.title}</p>
      <div className="w-full flex flex-wrap justify-center gap-4">
        <span>
          <p className="text-content-100 max-w-[300px] mb-4">{article?.text[0]}</p>
          <p className="text-content-100 max-w-[300px] mb-4">{article?.text[1]}</p>
          <p className="text-content-100 max-w-[300px]">{article?.text[1]}</p>
        </span>
        <div className="flex gap-3">
          <Image alt="Max changing a bulb" src={plant_1} className="rounded-md" />
          <Image alt="Max changing a bulb" src={plant_2} className="rounded-md" />
          <Image alt="Max changing a bulb" src={plant_3} className="rounded-md" />
        </div>
      </div>
      <div className="bg-divider-300 w-11/12 h-[2px] my-4 m-auto" />
    </li>
  );
};

export default Farmer;
