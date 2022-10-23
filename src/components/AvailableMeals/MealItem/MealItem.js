import {useContext} from "react";
import FoodApplicationContext from "../../../store/food-application";
import styles from './MealItem.module.scss';
import MealItemForm from "../MealItemForm/MealItemForm";

const MealItem = ({ name, description, price, id }) => {
    const {dispatchModel} = useContext(FoodApplicationContext)
    const onAddItem = (count) => {
        dispatchModel({count, id});
    }
    return (
        <li className={styles.meal}>
            <div className='meal-content'>
                <h3>{name}</h3>
                <div className={styles.description}>{description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <MealItemForm onAddItem={onAddItem}/>
        </li>
    )
}
export default MealItem;