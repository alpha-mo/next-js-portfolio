import Heading from "@/components/workPage/Heading";
import Own from "@/components/workPage/Own";
import Trainee from "@/components/workPage/Trainee";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My work",
  description: "See what projects I am working on",
  keywords: ["Max Ojail", "fullstack developer", "java developer", "projects"],
};

const WorkPage = () => {
  return (
    <main>
      <Heading />
      <div className="bg-divider-300 w-11/12 h-[2px] my-4" />
      <Trainee />
      <div className="bg-divider-300 w-11/12 h-[2px] my-4" />
      <Own />
    </main>
  );
};

export default WorkPage;
