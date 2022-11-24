import styles from './Header.module.scss';
import HeaderCartButton from './HeaderCartButton/HeaderCartButton';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Link to='/' className={styles['main-link']}>
          <h1>React Meals</h1>
        </Link>
        <HeaderCartButton />
      </header>

    </>
  );
};
export default Header;
