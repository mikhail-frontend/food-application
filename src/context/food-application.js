import {createContext, useState} from "react";
import DummyMeals from "./dummy-meals";
const FoodApplicationContext = createContext({
    items: DummyMeals,
    isModal: false,
    setIsModal: () => {},
    selectedGoodsCount: 0
});
export const FoodApplicationContextProvider = ({children}) => {
    const [isModal, setIsModal] = useState(false);
    return (
        <FoodApplicationContext.Provider value={{items: DummyMeals, isModal, setIsModal, selectedGoodsCount: 2}}>
            {children}
        </FoodApplicationContext.Provider>
    )
}
export default FoodApplicationContext;