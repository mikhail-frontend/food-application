import {useContext} from "react";

import FoodApplicationContext from "../../context/food-application";
import OrderModal from "../OrderModal/OrderModal";
import CartIcon from "./CartIcon";
import styles from './HeaderCartButton.module.scss'

const HeaderCartButton = () => {
    const {isModal, setIsModal, selectedGoodsCount} = useContext(FoodApplicationContext);
    return (
        <>
            <button onClick={() => setIsModal(true)} className={`${styles.button}`}>
                <CartIcon className={styles.icon}/>
                Your Cart
                { !!selectedGoodsCount && <span className={styles.badge}>{selectedGoodsCount}</span>}
            </button>
            {isModal ? <OrderModal/> : ''}
        </>
    )
}
export default HeaderCartButton;