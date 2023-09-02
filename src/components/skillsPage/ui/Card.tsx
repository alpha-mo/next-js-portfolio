import { Key, getItem } from "./toolsList";

const Card = ({ variant }: { variant: Key }) => {
  const item = getItem(variant);

  return (
    <div className="flex gap-1 border border-divider-200 p-2 rounded-tl-xl rounded-br-xl w-fit bg-slate-200 hover:animate-bounce">
      <svg width={16} height={16}>
        <use href={item.path} />
      </svg>
      <p className="text-slate-950 text-xs">{item.text}</p>
    </div>
  );
};

export default Card;
