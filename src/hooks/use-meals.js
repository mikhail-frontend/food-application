import {useCallback, useState} from "react";

const useMeals = (request) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [meals, setMeals] = useState([]);
    const fetchMeals = useCallback(async () => {
        setLoading(true);
        setError(null)
        try {
            const meals = await request();
            setMeals(meals && Array.isArray(meals) ? meals : []);
        } catch (error) {
            setError(error.message)
        }
        setLoading(false);
    }, [request]);

    return {loading, error, fetchMeals, meals}

};
export default useMeals;