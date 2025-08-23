import { useCallback, useEffect, useState } from "react";

export const useHashNavigation = () => {
  const hash = window.location.hash;
  const [page, setPage] = useState(hash);
  const changePage = useCallback(
    (hash: string) => {
      setPage(hash);
    },
    [page]
  );
  const handlePageChange = useCallback(() => {
    const newURL = window.location.hash;
    if (page !== newURL) {
      setPage(newURL);
    }
  }, [page]);
  useEffect(() => {
    window.addEventListener("hashchange", handlePageChange);
    return () => window.removeEventListener("hashchange", handlePageChange);
  }, [page]);
  return { page: page.replace("#", "").toLowerCase() || "home", changePage };
};
