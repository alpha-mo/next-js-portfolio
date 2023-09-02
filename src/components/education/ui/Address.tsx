import Link from "next/link";

type Type = "award" | "issu";
type YaAddress = {
  top: "YH Akademin AB";
  box: "Box 127";
  bottom: "791 23 Falun - Sweden";
};
type MyhAddress = {
  top: "The Swedish National Agency for Higher Vocational Education";
  box: "Box 145";
  bottom: "721 05 Västerås, Sweden";
};

const Address = ({ type }: { type: Type }) => {
  let obj: {
    address: YaAddress | MyhAddress;
    link: string;
  };

  switch (type) {
    case "award":
      obj = {
        address: {
          top: "YH Akademin AB",
          box: "Box 127",
          bottom: "791 23 Falun - Sweden",
        },
        link: "https://ya.se/",
      };
      break;

    case "issu":
      obj = {
        address: {
          top: "The Swedish National Agency for Higher Vocational Education",
          box: "Box 145",
          bottom: "721 05 Västerås, Sweden",
        },
        link: "https://www.myh.se/",
      };
      break;
  }

  return (
    <>
      <p className="text-content-100 font-semibold">Address</p>
      <div className="border border-divider-100 rounded-md w-full max-w-sm shadow-base-shadow p-4">
        <div className="grid grid-cols-[1fr,2px,4ch] justify-center items-center">
          <div className="text-content-100 text-sm">
            <p>{obj.address.top}</p>
            <p>{obj.address.box}</p>
            <p>{obj.address.bottom}</p>
          </div>
          <div className="bg-divider-100 w-[2px] h-5/6"></div>
          <Link href={obj.link} target="_blank" className="m-auto">
            <svg width={22} height={22}>
              <use href="/svg/ui_icons/externalLink.svg#ext-link" strokeWidth={2} className="stroke-link" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Address;
