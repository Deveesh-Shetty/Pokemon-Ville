import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  let source = axios.CancelToken.source();
  useEffect(() => {
    axios
      .get(url, {
        cancelToken: source.token,
      })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => setError(err));

    return () => {
      // Cancelling extra unneccesary api calls
      source.cancel;
    };
  }, []);

  return { data, loading, error };
}
export default useFetch;
