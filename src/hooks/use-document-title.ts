import { useEffect, useRef } from "react";

export const useDocumentTitle = (title?: string) => {
  // useRef va enregistrer la valeur et ne va jamais changer meme apres la modification de `title`
  const appTitleRef = useRef<string | null>(document.title);
  useEffect(() => {
    document.title = title || "";
    return () => {
      document.title = appTitleRef.current!;
    };
  }, []);
  useEffect(() => {
    document.title = title || "";
    if (!title?.trim()) {
      document.title = appTitleRef.current!;
    }
  }, [title]);
};
