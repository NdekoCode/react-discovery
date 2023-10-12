import { useEffect, useRef } from "react";

export const useDocumentTitle = (title:string)=>{

    const originalTitle = useRef(document.title);
    useEffect(()=>{
        return ()=>{
            document.title = originalTitle.current;
        }
    },[])
    useEffect(()=>{
            document.title =title.trim().length>1 ? title : originalTitle.current;
    },[title]);
}