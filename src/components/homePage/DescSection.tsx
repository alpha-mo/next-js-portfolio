import { content } from "@/content/home/cards";
import DescCard from "./ui/Card";

const CardsSection = () => {
  return (
    <section className="">
      <p className="text-primary text-lg font-semibold mb-2">What to expect in my portfolio</p>
      <ul className="flex flex-col tablet:flex-row tablet:flex-wrap gap-4">
        {content.map((cardContent) => {
          return (
            cardContent.url != "/" && (
              <li key={cardContent.url}>
                {/* {cardContent.title} */}
                <DescCard content={cardContent} />
              </li>
            )
          );
        })}
      </ul>
    </section>
  );
};

export default CardsSection;
