import {createContext, useState} from "react";
import DummyMeals from "./dummy-meals";
const FoodApplicationContext = createContext({
    items: DummyMeals,
    isModal: false,
    setIsModal: () => {}
});
export const FoodApplicationContextProvider = ({children}) => {
    const [isModal, setIsModal] = useState(false);
    return (
        <FoodApplicationContext.Provider value={{items: DummyMeals, isModal, setIsModal}}>
            {children}
        </FoodApplicationContext.Provider>
    )
}
export default FoodApplicationContext;