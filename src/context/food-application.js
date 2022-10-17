import {createContext, useState, useEffect, useReducer} from "react";
import DummyMeals from "../helpers/dummy-meals";
import {buildModel, modelReducer, scheme} from '../helpers/ordered-meals';

const FoodApplicationContext = createContext({
    isModal: false,
    setIsModal: (value) => (value),
    isBump: false,
    model: scheme,
    dispatchModel: (payload) => payload,
    sendRequest: () => {}

});

export const FoodApplicationContextProvider = ({children}) => {
    const [isModal, setIsModal] = useState(false);
    const [isBump, setIsBump] = useState(false);
    const [model, dispatchModel] = useReducer(modelReducer, buildModel(DummyMeals), () => buildModel(DummyMeals));

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

    const context = { isModal, setIsModal, isBump, model, dispatchModel, sendRequest}

    return (
        <FoodApplicationContext.Provider
            value={context}>
            {children}
        </FoodApplicationContext.Provider>
    )
}
export default FoodApplicationContext;