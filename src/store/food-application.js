import { createContext,  useReducer, useCallback } from "react";
import DummyMeals from "../helpers/dummy-meals";
import {buildModel, modelReducer, scheme} from '../helpers/ordered-meals';

const FoodApplicationContext = createContext({
    model: scheme,
    dispatchModel: (payload) => payload,
    sendRequest: () => {}
});

export const FoodApplicationContextProvider = ({children}) => {
    const [model, dispatchModel] = useReducer(modelReducer, buildModel(DummyMeals), () => buildModel(DummyMeals));
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