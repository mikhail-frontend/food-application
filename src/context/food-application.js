import {createContext, useState, useEffect} from "react";
import DummyMeals from "./dummy-meals";
const FoodApplicationContext = createContext({
    items: DummyMeals,
    isModal: false,
    setIsModal: () => {},
    selectedGoodsCount: 0
});
export const FoodApplicationContextProvider = ({children}) => {
    const [isModal, setIsModal] = useState(false);
    useEffect(() => {

    }, [])
    return (
        <FoodApplicationContext.Provider value={{items: DummyMeals, isModal, setIsModal, selectedGoodsCount: 0}}>
            {children}
        </FoodApplicationContext.Provider>
    )
}
export default FoodApplicationContext;