import styles from './Modal.module.scss'
import {createPortal} from "react-dom";
const Modal = ({children, onHideModal}) => {
    createPortal(<Modal/>, document.getElementById('modal-root'))
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