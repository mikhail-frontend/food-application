import {useContext} from "react";
import {createPortal} from "react-dom";
import FoodApplicationContext from "../../context/food-application";
import Modal from "../UI/Modal/Modal";

const OrderModal = () => {
    const {setIsModal} = useContext(FoodApplicationContext);
    createPortal(<OrderModal/>, document.getElementById('modal-root'))
    return (
        <Modal onHideModal={() => setIsModal(false)}>
            1234
        </Modal>
    )
}
export default OrderModal