import styles from './Header.module.scss';
import HeaderCartButton from './HeaderCartButton/HeaderCartButton';
import MainImage from '../../../assets/img/meals.jpeg';
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={MainImage} alt="Delicious food. Choice ReactMeals!" />
      </div>
    </>
  );
};
export default Header;
