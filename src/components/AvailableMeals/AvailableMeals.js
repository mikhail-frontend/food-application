import {useContext} from "react";
import FoodApplicationContext from "../../context/food-application";
import styles from './AvailableMeals.module.scss'
import Card from "../UI/Card/Card";
import MealItem from "../MealItem/MealItem";

const AvailableMeals = () => {
    const {items} = useContext(FoodApplicationContext)
    return (
        <Card className={styles.meals}>
            {items.map(({id, name, description, price}) => {
                return <MealItem description={description} name={name} price={price} key={id}/>
            })}
        </Card>
    )
}
export default AvailableMeals;