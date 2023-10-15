import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="container px-4 mx-auto lg:px-0">{children}</div>;
};
export default Container;
