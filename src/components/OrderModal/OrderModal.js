import { useContext, useRef, useState } from 'react';
import FoodApplicationContext from '../../store/food-application';
import styles from './OrderModal.module.scss';
import Modal from '../UI/Modal/Modal';
import OrderModalItem from './OrderModalItem/OrderModalItem';
import ModalForm from './ModalForm/ModalForm';
import Card from '../UI/Card/Card';

const OrderModalList = () => {
  const {
    model: { selectedItems },
    dispatchModel
  } = useContext(FoodApplicationContext);

  const onCountChange = (id, action) => {
    dispatchModel({ id, count: 1, action });
  };

  return (
    <ul className={styles['order-modal-items']}>
      {selectedItems.map(({ id, amount, name, price }) => {
        return (
          <OrderModalItem
            key={id}
            price={price}
            name={name}
            amount={amount}
            id={id}
            onCountChange={onCountChange}
          />
        );
      })}
    </ul>
  );
};

const OrderModalContent = ({ onSetIsModal = () => {} }) => {
  const {
    model: { totalPrice },
    sendRequest,
    isFormFilled: isButtonEnabled
  } = useContext(FoodApplicationContext);
  const [isConfirmed, setIsConformed] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);
  const [userName, setUserName] = useState('');
  const formRef = useRef();

  const orderFood = async () => {
    const values = formRef.current && formRef.current?.onSubmit ? formRef.current.onSubmit() : null;
    if (!values) return;
    try {
      await sendRequest(values);
      setUserName(() => values.name);
    } catch (e) {
      setError(e.message || 'Something went wrong');
    }
    setIsSent(true);
    setTimeout(() => onSetIsModal(false), 2500)
  };

  const text = <h1 style={{ color: 'red' }}>Thank you, {userName}, your order will come soon </h1>;

  return (
    <>
      {error && <Card>{error}</Card>}
      {!error && !isSent && isConfirmed ? <ModalForm ref={formRef} /> : ''}
      {!error && !isSent && !isConfirmed ? <OrderModalList /> : ''}
      {!error && isSent && <Card>{text}</Card>}
      <div className={styles.total}> Total price: {totalPrice.toFixed(2)}$</div>
      <div className={styles.actions}>
        <button className={`${styles.close} ${styles.button}`} onClick={() => onSetIsModal(false)}>
          Close
        </button>
        {!isSent ? (
          <button
            className={styles.button}
            disabled={!isConfirmed ? false : !isButtonEnabled}
            onClick={() => (!isConfirmed ? setIsConformed(() => true) : orderFood())}
          >
            Order
          </button>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

const NoData = ({ onSetIsModal = () => {} }) => {
  return (
    <Card className={styles['no-data']}>
      Unfortunately, you did not order anything :( <br />
      <button className={styles.button} onClick={() => onSetIsModal(false)}>
        Order meal
      </button>
    </Card>
  );
};

const OrderModal = ({ onSetIsModal }) => {
  const {
    model: { selectedItems }
  } = useContext(FoodApplicationContext);
  const isExistSelected = Boolean(
    selectedItems && Array.isArray(selectedItems) && selectedItems.length
  );
  return (
    <Modal onHideModal={() => onSetIsModal(false)}>
      {isExistSelected && <OrderModalContent onSetIsModal={onSetIsModal} />}
      {!isExistSelected && <NoData onSetIsModal={onSetIsModal} />}
    </Modal>
  );
};
export default OrderModal;
