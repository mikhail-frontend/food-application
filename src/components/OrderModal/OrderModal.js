import {useContext} from "react";
import FoodApplicationContext from "../../store/food-application";
import styles from './OrderModal.module.scss';
import Modal from "../UI/Modal/Modal";
import OrderModalItem from "./OrderModalItem/OrderModalItem";
import Card from "../UI/Card/Card";

const OrderModalList = () => {
    const {model: {selectedItems}, dispatchModel} = useContext(FoodApplicationContext);

    const onCountChange = (id, action) => {
        dispatchModel({id, count: 1, action})
    };

    return (
        <ul className={styles['order-modal-items']}>
            {selectedItems.map(({id, amount, name, price}) => {
                return <OrderModalItem key={id}
                                       price={price}
                                       name={name}
                                       amount={amount}
                                       id={id}
                                       onCountChange={onCountChange}
                />
            })}
        </ul>
    )
};

const OrderModalContent = ({
                               onSetIsModal = () => {
                               }
                           }) => {
    const {model: {totalPrice}, sendRequest} = useContext(FoodApplicationContext);

    const orderFood = async () => {
        onSetIsModal(false);
        await sendRequest();
    }

    return (
        <>
            <OrderModalList/>
            <div className={styles.total}> Total price: {totalPrice.toFixed(2)}$</div>
            <div className={styles.actions}>
                <button className={`${styles.close} ${styles.button}`}
                        onClick={() => onSetIsModal(false)}>
                    Close
                </button>
                <button className={styles.button} onClick={orderFood}>Order</button>
            </div>
        </>
    )
}

const NoData = ({
                    onSetIsModal = () => {
                    }
                }) => {
    return (
        <Card className={styles['no-data']}>
            Unfortunately, you did not order anything :( <br/>
            <button className={styles.button} onClick={() => onSetIsModal(false)}>Order meal</button>
        </Card>
    )
}

const OrderModal = ({onSetIsModal}) => {
    const {model: {selectedItems}} = useContext(FoodApplicationContext);
    const isExistSelected = Boolean(selectedItems && Array.isArray(selectedItems) && selectedItems.length);
    return (
        <Modal onHideModal={() => onSetIsModal(false)}>
            {isExistSelected && <OrderModalContent onSetIsModal={onSetIsModal}/>}
            {!isExistSelected && <NoData onSetIsModal={onSetIsModal}/>}
        </Modal>
    )
}
export default OrderModal