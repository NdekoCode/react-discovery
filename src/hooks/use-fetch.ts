import { useEffect, useState } from "react";

export const useFetch = <T extends any>(
  url: string,
  options?: RequestInit
): { loading: boolean; errors: Error | null; data: T | null } => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [errors, setErrors] = useState<Error | any>(null);
  const getData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url, {
        ...options,
        headers: {
          Accept: "application/json; charset=UTF-8",
          ...options?.headers,
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
      console.log(response);
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
  }, []);

  return { loading, errors, data };
};
