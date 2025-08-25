import Page404 from "@/pages/404/page";
import AboutPage from "@/pages/about/page";
import Blog from "@/pages/blog/page";
import ContactUsPage from "@/pages/contact/page";
import HomePage from "@/pages/home/page";
import PostPage from "@/pages/post/page";

import { useHashNavigation } from "./use-navigation-page";

export const useRenderPage = () => {
  const { page } = useHashNavigation();
  const pagesMap = {
    about: <AboutPage />,
    contact: <ContactUsPage />,
    blog: <Blog />,
    home: <HomePage />,
    post: <PostPage />,
    default: <Page404 />,
  };
  return pagesMap[page as keyof typeof pagesMap] || pagesMap["default"];
};
