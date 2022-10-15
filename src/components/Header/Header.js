import styles from './Header.module.scss'
const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <h1>React Meals</h1>
            </header>
            <div className={styles['main-image']}>
                <img src={require('../../assets/img/meals.jpeg')} alt=""/>
            </div>
        </>
    )
}
export default Header;