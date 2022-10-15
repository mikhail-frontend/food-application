import {useContext} from "react";

import FoodApplicationContext from "./context/food-application";
import OrderModal from "./components/OrderModal/OrderModal";
import './assets/globalStyles/App.scss';


const App = () => {
    const {isModal, setIsModal} = useContext(FoodApplicationContext);
    return (
        <div>
            <button onClick={() => setIsModal(true)}>1234</button>
            {isModal ? <OrderModal/> : ''}
        </div>
    );
}

export default App;
