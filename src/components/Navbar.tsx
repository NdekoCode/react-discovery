import { FunctionComponent } from "react";
import { Link, NavLink } from "react-router-dom";
import HumbergerItem from "./HumbergerItem";

const Navbar: FunctionComponent = () => {
  return (
    <nav
      className="container w-full px-4 mx-auto sm:flex sm:items-center sm:justify-between lg:px-0"
      aria-label="Global"
    >
      <div className="flex items-center justify-between">
        <NavLink to="/" className="flex-none text-xl font-semibold ">
          React Learning
        </NavLink>
        <HumbergerItem />
      </div>
      <div
        id="navbar-collapse-basic"
        className="hidden basis-full grow sm:block"
      >
        <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
          <NavLink
            className="font-medium text-blue-500"
            to="/"
            aria-current="page"
          >
            Home
          </NavLink>
          <NavLink className="font-medium" to="/blog" aria-current="page">
            Blog
          </NavLink>
          <NavLink className="font-medium" to="/about" aria-current="page">
            A propos
          </NavLink>
          <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
            <button
              id="hs-mega-menu-basic-dr"
              type="button"
              className="flex items-center w-full font-medium text-gray-600 hover:text-gray-400 "
            >
              Application Type
              <svg
                className="ml-2 w-2.5 h-2.5 text-gray-600"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2  sm:   before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5">
              <Link
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500   "
                to="#"
              >
                A propos
              </Link>
              <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-800 rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 "
                >
                  Sub Menu
                  <svg
                    className="sm:-rotate-90 ml-2 w-2.5 h-2.5 text-gray-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2  sm:   before:absolute sm:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
                  <NavLink
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500   "
                    to="/about"
                  >
                    A propos
                  </NavLink>
                  <NavLink
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500   "
                    to="#"
                  >
                    Telecharger
                  </NavLink>
                  <NavLink
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500   "
                    to="#"
                  >
                    Team Account
                  </NavLink>
                </div>
              </div>
              <NavLink
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500   "
                to="#"
              >
                Télecharger
              </NavLink>
              <NavLink
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500   "
                to="#"
              >
                Equipe
              </NavLink>
            </div>
          </div>
          <NavLink
            className="font-medium text-gray-600 hover:text-gray-400 "
            to="#"
          >
            Liens utile
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
