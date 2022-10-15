import styles from './Modal.module.scss'
const Modal = ({children, onHideModal}) => {
    return (
        <>
            <div className={styles.backdrop} onClick={onHideModal}/>
            <div className={styles.modal}>
                {children}
            </div>
        </>
    )
}
export default Modal;