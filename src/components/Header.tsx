import { FunctionComponent } from "react";
import Navbar from "./Navbar";

const Header: FunctionComponent = () => {
  return (
    <header className="relative z-50 flex flex-wrap w-full py-4 text-sm bg-white sm:justify-start sm:flex-nowrap ">
      <Navbar />
    </header>
  );
};

export default Header;
