import Header from "./components/Header/Header";
import MealsSummary from "./components/MealsSummary/MealsSummury";
import './assets/globalStyles/App.scss';


const App = () => {
    return (
        <div className="food-order">
            <Header/>
            <MealsSummary/>
        </div>
    );
}

export default App;
