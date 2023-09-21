import { Dispatch, SetStateAction, useState } from "react";

export const useFetch = async <T>(
  url: string,
  setter: Dispatch<SetStateAction<T>>
): Promise<unknown> => {
  const [data, setData] = useState<T | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  try {
    const res = await fetch(url);
    const resData = await res.json();
    setter(resData);
    setData(resData);
    setIsLoading(false);

    return [isLoading, data];
  } catch (error) {
    console.error(error);
    setIsLoading(false);
  }
};
