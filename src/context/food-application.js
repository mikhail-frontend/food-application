import {createContext, useState, useEffect, useReducer} from "react";
import DummyMeals from "../helpers/dummy-meals";
import {buildModel, modelReducer, scheme} from '../helpers/ordered-meals';

const FoodApplicationContext = createContext({
    isModal: false,
    setIsModal: () => {},
    isBump: false,
    model: scheme,
    dispatchModel: (payload) => {},

});

export const FoodApplicationContextProvider = ({children}) => {
    const [isModal, setIsModal] = useState(false);
    const [isBump, setIsBump] = useState(false);
    const [model, dispatchModel] = useReducer(modelReducer, buildModel(DummyMeals));

    useEffect(() => {
        if(!model.selectedGoodsCount || isModal) return;
        setIsBump(true);
        const bumpTimeout = setTimeout(() => setIsBump(false), 310);
        return () =>  clearTimeout(bumpTimeout);

    }, [model.selectedGoodsCount, isModal]);

    return (
        <FoodApplicationContext.Provider
            value={{ isModal, setIsModal,  model, dispatchModel, isBump}}>
            {children}
        </FoodApplicationContext.Provider>
    )
}
export default FoodApplicationContext;