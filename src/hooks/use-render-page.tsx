import { lazy, Suspense } from "react";

import LoadingSpinner from "@/components/loading-spinner";
import Page404 from "@/pages/404/page";
import AboutPage from "@/pages/about/page";
import Blog from "@/pages/blog/page";
import ContactUsPage from "@/pages/contact/page";
import HomePage from "@/pages/home/page";
import PostPage from "@/pages/post/page";

import { useHashNavigation } from "./use-navigation-page";

export const useRenderPage = () => {
  const { page } = useHashNavigation();
  const LazyAboutPage = lazy(async () => await import("@/pages/about/page"));
  const LazyContactUsPage = lazy(
    async () => await import("@/pages/contact/page")
  );
  const LazyBlog = lazy(async () => await import("@/pages/blog/page"));
  const LazyHomePage = lazy(async () => await import("@/pages/home/page"));
  const LazyPostPage = lazy(async () => await import("@/pages/post/page"));
  const pagesMap = {
    about: (
      <Suspense fallback={<LoadingSpinner />}>
        <LazyAboutPage />
      </Suspense>
    ),
    contact: (
      <Suspense fallback={<LoadingSpinner />}>
        <LazyContactUsPage />
      </Suspense>
    ),
    blog: (
      <Suspense fallback={<LoadingSpinner />}>
        <LazyBlog />
      </Suspense>
    ),
    home: (
      <Suspense fallback={<LoadingSpinner />}>
        <LazyHomePage />
      </Suspense>
    ),
    post: (
      <Suspense fallback={<LoadingSpinner />}>
        <LazyPostPage />
      </Suspense>
    ),
    default: <Page404 />,
  };
  return pagesMap[page as keyof typeof pagesMap] || pagesMap["default"];
};
