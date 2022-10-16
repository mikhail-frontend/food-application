import styles from './Header.module.scss'
import HeaderCartButton from "../../HeaderCartButton/HeaderCartButton";
const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <h1>React Meals</h1>
                <HeaderCartButton/>
            </header>
            <div className={styles['main-image']}>
                <img src={require('../../../assets/img/meals.jpeg')} alt=""/>
            </div>
        </>
    )
}
export default Header;