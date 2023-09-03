import { socialLinks, type SvgLinkProps, type SvgLinksObj } from "@/utils/socialLinks";
import Link from "next/link";

const SvgLink = ({ type }: { type: SvgLinkProps }) => {
  const linkObj = socialLinks.find((link) => link.type === type)!;

  return (
    <Link href={linkObj.value} title={linkObj.desc} target="_blank" aria-label={`${linkObj.desc} button`}>
      <svg height={16} width={wd[linkObj.type]} className="hover:scale-150">
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
