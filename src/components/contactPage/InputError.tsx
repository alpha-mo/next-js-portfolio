import { PropsWithChildren } from "react";

const ErrMsg = ({ children }: PropsWithChildren) => {
  return <p className="text-xs text-error mb-4">{children}</p>;
};

export default ErrMsg;
