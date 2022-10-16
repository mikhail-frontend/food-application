import './assets/globalStyles/App.scss';

import Header from "./components/Layout/Header/Header";
import MealsSummary from "./components/Layout/MealsSummary/MealsSummury";
import AvailableMeals from "./components/Layout/AvailableMeals/AvailableMeals";

const App = () => {
    return (
        <div className="food-order">
            <Header/>
            <MealsSummary/>
            <AvailableMeals/>
        </div>
    );
}

export default App;
