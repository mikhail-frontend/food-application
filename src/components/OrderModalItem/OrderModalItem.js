import styles from './OrderModaltem.module.scss'
const OrderModalItem = ({price = 0, name = '', amount = 0, onCountChange = () => {}}) => {
    const fixedPrice = `$${price.toFixed(2)}`;

    return (
        <li className={styles['order-modal-item']}>
            <div>
                <h2>{name}</h2>
                <div className={styles.summary}>
                    <span className={styles.price}>{fixedPrice}</span>
                    <span className={styles.amount}>x {amount}</span>
                </div>
            </div>
            <div className={styles.actions}>
                <button onClick={onCountChange}>−</button>
                <button onClick={onCountChange}>+</button>
            </div>
        </li>
    );
};

export default OrderModalItem;