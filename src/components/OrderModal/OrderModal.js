import {useContext} from "react";
import FoodApplicationContext from "../../context/food-application";
import Modal from "../UI/Modal/Modal";

const OrderModal = () => {
    const {setIsModal} = useContext(FoodApplicationContext);
    return (
        <Modal onHideModal={() => setIsModal(false)}>
            1234
        </Modal>
    )
}
export default OrderModal