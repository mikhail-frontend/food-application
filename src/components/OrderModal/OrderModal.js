import {useContext} from "react";
import FoodApplicationContext from "../../context/food-application";
import styles from './OrderModal.module.scss'
import Modal from "../UI/Modal/Modal";
import OrderModalItem from "../OrderModalItem/OrderModalItem";

const OrderModalList = () => {
    const { model: {selectedItems} } = useContext(FoodApplicationContext);
    return (
        <ul>
            {selectedItems.map(({id, amount, name, price}) => {
                return <OrderModalItem key={id}
                                       price={price}
                                       name={name}
                                       amount={amount}/>
            })}
        </ul>
    )
}

const OrderModal = () => {
    const { setIsModal } = useContext(FoodApplicationContext);
    return (
        <Modal onHideModal={() => setIsModal(false)}>
            <OrderModalList/>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={() => setIsModal(false)}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    )
}
export default OrderModal