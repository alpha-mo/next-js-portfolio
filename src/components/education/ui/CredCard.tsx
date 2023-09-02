type Type = "award" | "issu";
type Obj = {
  title: "awarded by" | "recognized by";
  path: "/svg/ya.svg#ya" | "/svg/myh.svg#myh";
};

const Card = ({ type }: { type: Type }) => {
  let obj: Obj;
  switch (type) {
    case "award":
      obj = {
        title: "awarded by",
        path: "/svg/ya.svg#ya",
      };
      break;
    case "issu":
      obj = {
        title: "recognized by",
        path: "/svg/myh.svg#myh",
      };
      break;
  }

  return (
    <div className="flex items-center border border-divider-200 w-52 rounded-lg overflow-hidden bg-slate-50 mb-3 mt-8 shadow-issuing">
      <p className="bg-secondary px-4 w-36 text-white font-bold text-sm py-[3px]">{obj.title}</p>
      <svg height={obj.title === "awarded by" ? 17 : 16} width={obj.title === "awarded by" ? 21 : 35} className="ml-4">
        <use href={obj.path} />
      </svg>
    </div>
  );
};

export default Card;
