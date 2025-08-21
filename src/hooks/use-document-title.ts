import { useEffect, useRef } from "react";

export const useDocumentTitle = (title: string) => {
  const appTitleRef = useRef<string | null>(document.title);
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = appTitleRef.current!;
    };
  }, []);
  useEffect(() => {
    document.title = title;
    if (!title.trim()) {
      document.title = appTitleRef.current!;
    }
  }, [title]);
};
