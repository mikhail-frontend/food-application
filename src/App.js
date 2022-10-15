import {useContext} from "react";

import FoodApplicationContext from "./context/food-application";
import OrderModal from "./components/OrderModal/OrderModal";
import Header from "./components/Header/Header";
import MealsSummary from "./components/MealsSummary/MealsSummury";
import './assets/globalStyles/App.scss';


const App = () => {
    const {isModal, setIsModal} = useContext(FoodApplicationContext);
    return (
        <div className="food-order">
            <Header/>
            <MealsSummary/>
            <button onClick={() => setIsModal(true)}>1234</button>
            {isModal ? <OrderModal/> : ''}
        </div>
    );
}

export default App;
