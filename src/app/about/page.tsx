import Family from "@/components/aboutPage/Family";
import Farmer from "@/components/aboutPage/Farmer";
import Geek from "@/components/aboutPage/Geek";
import Handy from "@/components/aboutPage/Handy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "read about who Max Ojail is.",
  keywords: ["Max Ojail", "fullstack developer", "java developer", "about me"],
};

const aboutPage = () => {
  return (
    <main>
      <ul>
        <Geek />
        <Handy />
        <Farmer />
        <Family />
      </ul>
    </main>
  );
};

export default aboutPage;
