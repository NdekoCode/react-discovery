import { useEffect, useState } from "react";

import { useRefSync } from "./use-ref-sync";

export const useFetch = <T>(
  url: string,
  options?: RequestInit
): {
  loading: boolean;
  errors: Error | null;
  data: T | null;
  setData: React.Dispatch<React.SetStateAction<T | null>>;
} => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [errors, setErrors] = useState<Error | any>(null);
  const optionsValue = useRefSync(options);
  const getData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url, {
        ...optionsValue?.current,
        headers: {
          Accept: "application/json; charset=UTF-8",
          ...optionsValue?.current?.headers,
        },
      });
      if (response.ok && response.status === 200) {
        const responseData = await response.json();
        setData(responseData);
      } else {
        setData(null);
        setErrors({
          message: response.statusText,
          status: response.status,
          url: response.url,
          type: response.type,
        });
      }
    } catch (error) {
      setData(null);
      setErrors(error as Error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    (async () => {
      await getData();
    })();
  }, [url]);

  return { loading, errors, data, setData };
};
