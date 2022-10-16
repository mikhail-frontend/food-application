import {createContext, useState, useEffect, useReducer} from "react";
import DummyMeals from "../helpers/dummy-meals";
import {buildModel, modelReducer} from '../helpers/ordered-meals';
const FoodApplicationContext = createContext({
    items: DummyMeals,
    isModal: false,
    setIsModal: () => {},
    selectedGoodsCount: 0,
    model: {'m0': 0},
    dispatchModel: (payload) => {},
});

export const FoodApplicationContextProvider = ({children}) => {
    const [isModal, setIsModal] = useState(false);
    const [model, dispatchModel] = useReducer(modelReducer, buildModel(DummyMeals))
    useEffect(() => {
        console.log(model)
    }, [model])
    return (
        <FoodApplicationContext.Provider
            value={{items: DummyMeals, isModal, setIsModal, selectedGoodsCount: 0, model, dispatchModel}}>
            {children}
        </FoodApplicationContext.Provider>
    )
}
export default FoodApplicationContext;