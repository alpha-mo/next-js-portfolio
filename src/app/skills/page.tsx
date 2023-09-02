import BasicSection from "@/components/skillsPage/Basic";
import Frameworks from "@/components/skillsPage/Frameworkes";
import Heading from "@/components/skillsPage/Heading";

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
