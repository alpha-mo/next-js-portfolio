import Family from "@/components/aboutPage/Family";
import Farmer from "@/components/aboutPage/Farmer";
import Geek from "@/components/aboutPage/Geek";
import Handy from "@/components/aboutPage/Handy";

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
