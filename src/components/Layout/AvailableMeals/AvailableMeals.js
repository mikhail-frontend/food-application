import {useContext} from "react";
import FoodApplicationContext from "../../../store/food-application";
import styles from './AvailableMeals.module.scss'
import Card from "../../UI/Card/Card";
import MealItem from "../../MealItem/MealItem";

const MealsList = () => {
    const {model: {meals}} = useContext(FoodApplicationContext)
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
    return (
        <Card className={styles.meals}>
            <MealsList/>
        </Card>
    )
}
export default AvailableMeals;