import {createContext, useState, useEffect, useReducer} from "react";
import DummyMeals from "../helpers/dummy-meals";
import {buildModel, modelReducer} from '../helpers/ordered-meals';
const FoodApplicationContext = createContext({
    items: DummyMeals,
    isModal: false,
    setIsModal: () => {},
    selectedGoodsCount: 0,
    model: {'m0': 0},
    //eslint-disable-new-line
    dispatchModel: (payload) => {},
    isBump: false
});

export const FoodApplicationContextProvider = ({children}) => {
    const [isModal, setIsModal] = useState(false);
    const [isBump, setIsBump] = useState(false);
    const [model, dispatchModel] = useReducer(modelReducer, buildModel(DummyMeals));
    const [selectedGoodsCount, setSelectedGoodsCount] = useState(0);

    useEffect(() => {
        setSelectedGoodsCount(Object.values(model).reduce((acc, curr) => (acc+=curr), 0));
        setIsBump(true);
        const bumpTimeout = setTimeout(() => {
            setIsBump(false)
        }, 300);
        return () => {
            clearTimeout(bumpTimeout)
        }
    }, [model]);
    return (
        <FoodApplicationContext.Provider
            value={{items: DummyMeals, isModal, setIsModal, selectedGoodsCount, model, dispatchModel, isBump}}>
            {children}
        </FoodApplicationContext.Provider>
    )
}
export default FoodApplicationContext;