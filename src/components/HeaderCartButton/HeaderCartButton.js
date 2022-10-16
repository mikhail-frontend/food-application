import {useContext} from "react";

import FoodApplicationContext from "../../context/food-application";
import OrderModal from "../OrderModal/OrderModal";
import CartIcon from "./CartIcon";
import styles from './HeaderCartButton.module.scss'

const HeaderCartButton = () => {
    const {isModal, setIsModal, selectedGoodsCount, isBump} = useContext(FoodApplicationContext);
    return (
        <>
            <button onClick={() => setIsModal(true)} className={`${styles.button} ${isBump && styles.bump}`}>
                <CartIcon className={styles.icon}/>
                Your Cart
                 <span className={styles.badge}>{selectedGoodsCount}</span>
            </button>
            {isModal ? <OrderModal/> : ''}
        </>
    )
}
export default HeaderCartButton;