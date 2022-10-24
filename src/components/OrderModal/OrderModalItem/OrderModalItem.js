import styles from './OrderModaltem.module.scss';

const OrderModalItem = ({
  price = 0,
  name = '',
  amount = 0,
  onCountChange = () => {},
  id = 'm0',
  className = ''
}) => {
  const fixedPrice = `$${price.toFixed(2)}`;

  return (
    <li className={`${styles['order-modal-item']} ${className}`}>
      <div>
        <h2>{name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{fixedPrice}</span>
          <span className={styles.amount}>x {amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={() => onCountChange(id, 'minus')}>−</button>
        <button onClick={() => onCountChange(id, 'plus')}>+</button>
      </div>
    </li>
  );
};

export default OrderModalItem;
