import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let source = axios.CancelToken.source();
  useEffect(() => {
    axios
      .get(url, {
        cancelToken: source.token,
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false);
        // Adding it later
      });

    return () => {
      // Cancelling extra unneccesary api calls
      // source.cancel();
      // For some reason cancelling everything
    };
  }, [url]);

  return { data, loading, error };
}
export default useFetch;
