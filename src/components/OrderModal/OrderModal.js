import {useContext} from "react";
import FoodApplicationContext from "../../context/food-application";
import Modal from "../UI/Modal/Modal";
import OrderModalItem from "../OrderModalItem/OrderModalItem";

const OrderModal = () => {
    const {setIsModal} = useContext(FoodApplicationContext);
    return (
        <Modal onHideModal={() => setIsModal(false)}>
            <OrderModalItem/>
        </Modal>
    )
}
export default OrderModal