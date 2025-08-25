import { useCallback, useEffect, useState } from "react";

export const useHashNavigation = () => {
  const hash = window.location.hash.split(/:/);
  const url = hash[0];
  const [page, setPage] = useState(url);
  const [param, setParam] = useState(hash[1] ?? "");
  console.log(hash);
  const changePage = useCallback(
    (hash: string) => {
      setPage(hash);
    },
    [page]
  );
  const handlePageChange = useCallback(() => {
    const newURL = window.location.hash.split(":");
    const url = newURL[0];
    console.log(newURL);
    if (newURL.length > 0) {
      setParam(() => newURL[1]);
      setPage(() => newURL[0]);
    } else if (page !== url) {
      setPage(url);
    }
  }, [page]);
  useEffect(() => {
    window.addEventListener("hashchange", handlePageChange);
    return () => window.removeEventListener("hashchange", handlePageChange);
  }, [page]);
  return {
    page: page.replace("#", "").toLowerCase() || "home",
    param,
    changePage,
  };
};
