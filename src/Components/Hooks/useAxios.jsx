import { useEffect, useState } from "react";
import axios from "axios";

function useAxios(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newError, setError] = useState("");

  useEffect(() => {
    async function loadAxios() {
      try {
        const { data: response } = await axios.get(url);
        setData(response); // Getting the data
      } catch (error) {
        setError(error); // If theres error
      }
      setLoading(false); //So that we can have loading animation
    }
    loadAxios();
  }, []);

  return {
    data,
    loading,
    newError,
  };
}

export default useAxios;
