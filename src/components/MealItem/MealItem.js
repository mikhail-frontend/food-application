import styles from './MealItem.module.scss'
const MealItem = ({ name, description, price }) => {
    return (
        <li className={styles.meal}>
            <div>
                <h3>{name}</h3>
                <div className={styles.description}>{description}</div>
                <div className={styles.price}>{price}</div>
            </div>
        </li>
    )
}
export default MealItem