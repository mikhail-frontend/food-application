import { createContext,  useReducer } from "react";
import DummyMeals from "../helpers/dummy-meals";
import {buildModel, modelReducer, scheme} from '../helpers/ordered-meals';

const FoodApplicationContext = createContext({
    model: scheme,
    dispatchModel: (payload) => payload,
    sendRequest: () => {}
});

export const FoodApplicationContextProvider = ({children}) => {
    const [model, dispatchModel] = useReducer(modelReducer, buildModel(DummyMeals), () => buildModel(DummyMeals));

    const sendRequest = async () => {
        const {selectedListKeys}  = model;
        await console.log(selectedListKeys);
        return selectedListKeys;
    };

    const context = {  model, dispatchModel, sendRequest}

    return (
        <FoodApplicationContext.Provider
            value={context}>
            {children}
        </FoodApplicationContext.Provider>
    )
}
export default FoodApplicationContext;