import BasicSection from "@/components/skillsPage/Basic";
import Frameworks from "@/components/skillsPage/Frameworkes";
import Heading from "@/components/skillsPage/Heading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description: "Frameworks and tools",
  keywords: ["Max Ojail", "fullstack developer", "java developer", "skills"],
};

const SkillsPage = () => {
  return (
    <main>
      <Heading />
      <div className="bg-divider-300 w-11/12 h-[2px] my-4" />
      <BasicSection />
      <div className="bg-divider-300 w-11/12 h-[2px] my-4" />
      <Frameworks />
    </main>
  );
};

export default SkillsPage;
