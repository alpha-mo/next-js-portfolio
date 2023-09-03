import { CardContent } from "@/content/home/cards";
import ext_link_icon from "@/../public/svg/ui_icons/externalLink.svg";
import Link from "next/link";

const DescCard = ({ content }: { content: CardContent }) => {
  return (
    <article className="border border-divider-200 rounded-md p-6 max-w-[35ch] h-full grid grid-rows-[1.6em,1fr,1em] gap-2">
      <p className="text-secondary font-semibold">{content.title}</p>
      <p className="text-content-100">{content.body}</p>
      <Link href={content.url} className="flex">
        <p className="text-link w-fit origin-bottom-left hover:scale-110">go to {content.title}</p>
      </Link>
    </article>
  );
};

export default DescCard;
