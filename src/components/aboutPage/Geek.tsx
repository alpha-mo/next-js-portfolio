import { articles } from "@/content/about/aboutMeArticles";
import pic from "@/../public/pix/about/geek.jpg";
import Image from "next/image";

const Geek = () => {
  const article = articles.find((art) => art.variant === "geek");

  return (
    <li className="flex flex-col justify-center items-center w-fit m-auto">
      <p className="text-content-100 w-auto text-primary text-2xl font-bold mb-4">{article?.title}</p>
      <div className="w-fit flex flex-wrap gap-4 justify-center">
        <Image src={pic} alt="photo of Max working with a computer" />
        <div className="w-full max-w-[40ch] tablet:max-w-[30ch] desktop:max-w-[32ch]">
          <p className="text-content-100">{article?.text[0]}</p>
          <p className="text-content-100 mt-2">{article?.text[1]}</p>
        </div>
      </div>
      <div className="w-11/12 h-[2px] bg-divider-300 my-4 m-auto" />
    </li>
  );
};

export default Geek;
