import { useEffect, useState } from "react";

export const useFetch = <T>(url: string, params: RequestInit = {}) => {
  const [data, setData] = useState<T | null | T[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errors, setErrors] = useState<Error | unknown>(null);

  const options = {
    headers: {
      Accept: "application/json; charset=UTF-8",
      "Content-Type": "application/json",
    },
    ...params,
  };
  
  useEffect(()=>{

  (async () => {
    try {
      const res = await fetch(url, options);
      const resData = await res.json();
      if (res.ok) {
        setData(resData);
      }
    } catch (error) {
      setErrors(error);
    }
    setIsLoading(false);
  })();
  },[])

  return [isLoading, data, errors];
};
export function useGetFetch<T>(
  url: string,
  params: RequestInit | undefined = undefined
) {
  const [state, setState] = useState<{ items: T[]; loading: boolean }>({
    items: [],
    loading: true,
  });
  const options: RequestInit = {
    headers: {
      Accept: "application/json; charset=UTF-8",
      "Content-Type": "application/json",
    },
    method: "GET",
    ...params,
  };
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url, options);
        const resData = await res.json();
        if (res.ok) {
          setState((d) => ({ ...d, items: resData, loading: false }));
        }
        setState((d) => ({ ...d, loading: false }));
      } catch (e) {
        setState((d) => ({ ...d, loading: false }));
      }
    })();
  }, []);
  return [state.loading, state.items];
}
