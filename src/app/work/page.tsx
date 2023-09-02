import Heading from "@/components/workPage/Heading";
import Own from "@/components/workPage/Own";
import Trainee from "@/components/workPage/Trainee";

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
