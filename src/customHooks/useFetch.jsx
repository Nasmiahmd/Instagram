import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    setLoading(true);
    setError(null);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch(url, {signal})
      .then((response) => {
        if (!response) {
          throw new Error(`HTTP Error: Status ${response.status}`);
        }
        return response.json();
        console.log(response);
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });

      return () => controller.abort();
  }, [url]);


  return { data, loading, error };
};

export default useFetch;
