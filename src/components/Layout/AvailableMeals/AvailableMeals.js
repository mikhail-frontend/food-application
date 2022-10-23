import {useContext} from "react";
import FoodApplicationContext from "../../../store/food-application";
import Card from "../../UI/Card/Card";
import MealItem from "../../MealItem/MealItem";
import Loader from "../../UI/Loader/Loader";
import styles from './AvailableMeals.module.scss'


const MealsList = () => {
    const {model: {meals}} = useContext(FoodApplicationContext);
    return (
        <ul>
            {meals.map(({id, name, description, price}) => {
                return <MealItem description={description}
                                 name={name}
                                 price={price}
                                 key={id}
                                 id={id}/>
            })}
        </ul>
    )
};


const AvailableMeals = () => {
    const {loading} = useContext(FoodApplicationContext);
    return (
        <Card className={styles.meals}>
            {loading && <Loader/>}
            {!loading && <MealsList/>}
        </Card>
    )
}
export default AvailableMeals;