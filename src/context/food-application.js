import {createContext, useState, useEffect, useReducer} from "react";
import DummyMeals from "../helpers/dummy-meals";
import {buildModel, modelReducer, scheme} from '../helpers/ordered-meals';
const FoodApplicationContext = createContext({
    isModal: false,
    setIsModal: () => {},
    isBump: false,
    model: scheme,
    //eslint-disable-next-line
    dispatchModel: (payload) => {},

});

export const FoodApplicationContextProvider = ({children}) => {
    const [isModal, setIsModal] = useState(false);
    const [isBump, setIsBump] = useState(false);
    //eslint-disable-next-line
    const [model, dispatchModel] = useReducer(modelReducer, buildModel(DummyMeals));

    useEffect(() => {
        if(!model.selectedGoodsCount) return;
        setIsBump(true);
        const bumpTimeout = setTimeout(() => {
            setIsBump(false)
        }, 300);
        return () => {
            clearTimeout(bumpTimeout)
        }
    }, [model.selectedGoodsCount]);

    return (
        <FoodApplicationContext.Provider
            value={{ isModal, setIsModal,  model, dispatchModel, isBump}}>
            {children}
        </FoodApplicationContext.Provider>
    )
}
export default FoodApplicationContext;