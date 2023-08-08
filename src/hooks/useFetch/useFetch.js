import { useState, useEffect, useRef } from 'react';

export default function useFetch(url) {
  const isMountedRef = useRef(false);
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    isMountedRef.current = true;

    async function init() {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const json = await response.json();
          if (isMountedRef.current) {
            setResponseData(json);
          }
        } else {
          throw response;
        }
      } catch (e) {
        if (isMountedRef.current) {
          setError(e);
        }
      } finally {
        if (isMountedRef.current) {
          setLoading(false);
        }
      }
    }

    init();
    return () => {
      isMountedRef.current = false;
    };
  }, [url]);

  return { responseData, error, loading };
}
