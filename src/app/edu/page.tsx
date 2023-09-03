import Education from "@/components/education/Education";
import Heading from "@/components/education/Heading";
import Issuing from "@/components/education/Issu";
import Topics from "@/components/education/Topics";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
  description: "Max's diploma",
  keywords: ["Max Ojail", "fullstack developer", "java developer", "education"],
};

const EducationPage = () => {
  return (
    <main className="">
      <h1 className="font-bold text-primary text-2xl">System Development Diploma</h1>
      <article>
        <Heading />
        <div className="bg-divider-300 w-11/12 h-[2px] my-4" />
        <Issuing />
        <div className="bg-divider-300 w-11/12 h-[2px] my-4" />
        <Topics />
        <div className="bg-divider-300 w-11/12 h-[2px] my-4" />
        <Education />
      </article>
    </main>
  );
};

export default EducationPage;
