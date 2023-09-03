import { socialLinks } from "@/utils/socialLinks";
import SvgLink from "./SvgLink";

const HomeButtons = () => {
  return (
    <ul className="flex gap-4 border border-divider-200 rounded-md w-fit px-5 py-3">
      {socialLinks.map((link) => {
        return (
          <li key={link.type}>
            <SvgLink type={link.type} />
          </li>
        );
      })}
    </ul>
  );
};

export default HomeButtons;
