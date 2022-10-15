import {useContext} from "react";
import FoodApplicationContext from "../../context/food-application";
import styles from './AvailableMeals.module.scss'
import Card from "../UI/Card/Card";
import MealItem from "../MealItem/MealItem";

const MealsList = () => {
    const {items} = useContext(FoodApplicationContext)
    return (
        <ul>
            {items.map(({id, name, description, price}) => {
                return <MealItem description={description} name={name} price={price} key={id}/>
            })}
        </ul>
    )
}

const AvailableMeals = () => {
    return (
        <Card className={styles.meals}>
            <MealsList/>
        </Card>
    )
}
export default AvailableMeals;