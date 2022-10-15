import styles from './MealItem.module.scss';
import Input from "../UI/Input/Input";
const MealItem = ({ name, description, price }) => {
    return (
        <li className={styles.meal}>
            <div>
                <h3>{name}</h3>
                <div className={styles.description}>{description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <Input type="number" min={0}/>
        </li>
    )
}
export default MealItem