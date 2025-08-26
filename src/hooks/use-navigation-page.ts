import { useCallback, useEffect, useMemo, useState } from "react";

export const useHashNavigation = () => {
  const hash = window.location.hash;
  const [page, setPage] = useState(hash);
  const cleanHash = useMemo(() => hash.replace("#", ""), [page]);
  console.log(hash);
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
  return {
    page: cleanHash ? cleanHash.toLowerCase().split(/:/)[0] : "home",
    param: cleanHash ? cleanHash.split(":")[1] ?? "" : "",
    changePage,
  };
};
