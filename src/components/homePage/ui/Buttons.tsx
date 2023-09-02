import { socialLinks } from "@/utils/socialLinks";
import SvgLink from "./SvgLink";

const HomeButtons = () => {
  return (
    <ul className="flex gap-4 border border-divider-200 rounded-md w-fit px-5 py-3">
      {socialLinks.map((link) => {
        return <SvgLink type={link.type} key={link.type} />;
      })}
    </ul>
  );
};

export default HomeButtons;
