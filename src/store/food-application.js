import { createContext,  useReducer, useCallback, useEffect } from "react";
// import DummyMeals from "../helpers/dummy-meals";
import {buildModel, modelReducer, scheme} from '../helpers/ordered-meals';
import {getMeals} from "../API";
import useMeals from "../hooks/use-meals";


const FoodApplicationContext = createContext({
    model: scheme,
    dispatchModel: (payload) => payload,
    sendRequest: () => {}
});

export const FoodApplicationContextProvider = ({children}) => {
    const [model, dispatchModel] = useReducer(modelReducer, buildModel([]), () => buildModel([]));
    const getData = useCallback(async () => (await getMeals()), [])
    const { fetchMeals } = useMeals(getData);

    useEffect(() => {
        fetchMeals().then((meals) => {
            dispatchModel({
                action: 'SET_MEALS',
                mealsToSet: !meals ? [] : Object.entries(meals).map(([key, value]) => ({...value, id: key}))
            });
        });
    }, [fetchMeals]);

    const {selectedListKeys}  = model;



    const sendRequest =  useCallback(() => {
        console.log(selectedListKeys);
        return selectedListKeys;
    }, [selectedListKeys]);

    const context = {  model, dispatchModel, sendRequest}

    return (
        <FoodApplicationContext.Provider
            value={context}>
            {children}
        </FoodApplicationContext.Provider>
    )
}
export default FoodApplicationContext;