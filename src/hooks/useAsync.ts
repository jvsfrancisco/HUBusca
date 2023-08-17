import { useState, useEffect, useCallback} from "react";

export function useAsync<T>(asyncFunction: () => Promise<T>, immediate = true) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(immediate);
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const act = useCallback(async (...rest: any) => {

    setLoading(true);
    setError(null);
    try {
      const newData = await asyncFunction(...rest);
      setData(newData);
      setLoading(false);
      return newData;
    } catch (error: unknown) {
      if(error instanceof Error) {
        setError(error);
      } else {
        setError(new Error("Unknown Error"));
        console.log(error);
      }
      setLoading(false);
      throw error;
    }
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      act();
    }
  }, [immediate, act]);

  return { act, data, error, loading };
}
