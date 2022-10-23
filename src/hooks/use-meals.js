import { useCallback, useState } from "react";

const useMeals = (request) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchMeals = useCallback(async () => {
    setLoading(true);
    setError(null);
    let data = null;
    try {
      data = await request();
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
    return data;
  }, [request]);

  return { loading, error, fetchMeals };
};
export default useMeals;
