import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const useFetch = async <T>(
  url: string,
  setter: Dispatch<SetStateAction<T>>
): Promise<unknown> => {
  const [data, setData] = useState<T | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  try {
    const res = await fetch(url);
    const resData = await res.json();
    if (res.ok) {
      setter(resData);
      setData(resData);
      setIsLoading(false);
    }

    return [isLoading, data];
  } catch (error) {
    console.error(error);
    setIsLoading(false);
  }
};
export function useGetFetch<T>(
  url: string,
  params: RequestInit | undefined = undefined
) {
  const [state, setState] = useState<{ items: T[]; loading: boolean }>({
    items: [],
    loading: true,
  });
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url, params);
        const resData = await res.json();
        if (res.ok) {
          setState((d) => ({ ...d, items: resData, loading: false }));
        } else {
          console.error(resData);
          setState((d) => ({ ...d, loading: false }));
        }
      } catch (e) {
        setState((d) => ({ ...d, loading: false }));
      }
    })();
  }, []);
  return [state.loading, state.items];
}
