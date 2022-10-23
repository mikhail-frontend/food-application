import {useCallback, useState} from "react";

const useMeals = (request) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchMeals = useCallback(async () => {
        setLoading(true);
        setError(null)
        try {
            return await request();
        } catch (error) {
            setError(error.message)
        }
        setLoading(false);
    }, [request]);

    return {loading, error, fetchMeals}

};
export default useMeals;