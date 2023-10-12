import { useEffect } from "react";

export const useDocumentTitle = (title:string)=>{
    useEffect(()=>{
        const originalTitle = document.title;
        return ()=>{
            document.title = originalTitle;
        }
    },[])
    useEffect(()=>{
        document.title =title;
    },[title]);
}