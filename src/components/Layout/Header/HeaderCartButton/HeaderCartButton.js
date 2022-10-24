import { useContext, useState } from 'react';

import FoodApplicationContext from '../../../../store/food-application';
import OrderModal from '../../../OrderModal/OrderModal';
import CartIcon from './CartIcon';
import styles from './HeaderCartButton.module.scss';
import { useEffect } from 'react';

const HeaderCartButton = () => {
  const {
    model: { selectedGoodsCount }
  } = useContext(FoodApplicationContext);
  const [isBump, setIsBump] = useState(false);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    if (!selectedGoodsCount) return;
    setIsBump(true);
    const bumpTimeout = setTimeout(() => setIsBump(false), 310);
    return () => clearTimeout(bumpTimeout);
  }, [selectedGoodsCount]);

  return (
    <>
      <button
        onClick={() => setIsModal(true)}
        className={`${styles.button} ${isBump && styles.bump}`}
      >
        <CartIcon className={styles.icon} />
        Your Cart
        <span className={styles.badge}>{selectedGoodsCount}</span>
      </button>
      {isModal ? <OrderModal onSetIsModal={(payload) => setIsModal(payload)} /> : ''}
    </>
  );
};
export default HeaderCartButton;
