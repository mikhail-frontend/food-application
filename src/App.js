import './assets/globalStyles/App.scss';

import Header from "./components/Header/Header";
import MealsSummary from "./components/MealsSummary/MealsSummury";
import AvailableMeals from "./components/AvailableMeals/AvailableMeals";

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
