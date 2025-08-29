import { useHashNavigation } from "@/hooks/use-navigation-page";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const { page } = useHashNavigation();
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            Logo
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className={cn(
                    "block py-2 px-3 rounded-sm md:p-0",
                    page === "home" ? "text-blue-700 underline" : ""
                  )}
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={cn(
                    "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                    page === "contact" ? "text-blue-700 underline" : ""
                  )}
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#todos"
                  className={cn(
                    "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                    page === "contact" ? "text-blue-700 underline" : ""
                  )}
                >
                  Todos
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className={cn(
                    "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                    page === "blog" ? "text-blue-700 underline" : ""
                  )}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={cn(
                    "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                    page === "about" ? "text-blue-700 underline" : ""
                  )}
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {page}
    </>
  );
};
