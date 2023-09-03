import { socialLinks, type SvgLinkProps, type SvgLinksObj } from "@/utils/socialLinks";
import Link from "next/link";

const SvgLink = ({ type }: { type: SvgLinkProps }) => {
  const linkObj = socialLinks.find((link) => link.type === type)!;

  return (
    <Link href={linkObj.value} title={linkObj.desc} target="_blank" className="hover:scale-150" aria-label={`${linkObj.desc} button`}>
      <svg height={16} width={wd[linkObj.type]}>
        <use href={linkObj.icon} />
      </svg>
    </Link>
  );
};

export default SvgLink;

const wd = {
  email: 22,
  github: 19,
  gitlab: 18,
  linkedin: 16,
};
