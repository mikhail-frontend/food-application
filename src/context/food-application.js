import {createContext, useState, useEffect, useReducer} from "react";
import DummyMeals from "../helpers/dummy-meals";
import {buildSelectedListKeys, modelReducer, scheme} from '../helpers/ordered-meals';

const FoodApplicationContext = createContext({
    isModal: false,
    setIsModal: () => {},
    isBump: false,
    model: scheme,
    dispatchModel: (payload) => {},
    sendRequest: () => {}

});

export const FoodApplicationContextProvider = ({children}) => {
    const [isModal, setIsModal] = useState(false);
    const [isBump, setIsBump] = useState(false);
    const [model, dispatchModel] = useReducer(modelReducer, buildSelectedListKeys(DummyMeals));

    useEffect(() => {
        if(!model.selectedGoodsCount) return;
        setIsBump(true);
        const bumpTimeout = setTimeout(() => setIsBump(false), 310);
        return () =>  clearTimeout(bumpTimeout);

    }, [model.selectedGoodsCount]);

    const sendRequest = () => {
        const {selectedListKeys}  = model;
        console.log(selectedListKeys);
        return selectedListKeys;
    }

    return (
        <FoodApplicationContext.Provider
            value={{ isModal, setIsModal, isBump, model, dispatchModel, sendRequest}}>
            {children}
        </FoodApplicationContext.Provider>
    )
}
export default FoodApplicationContext;