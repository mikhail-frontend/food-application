import styles from './Modal.module.scss'
import {createPortal} from "react-dom";

const ModalContent = ({onHideModal, children}) => {
    return (
        <>
            <div className={styles.backdrop} onClick={onHideModal}/>
            <div className={styles.modal}>
                {children}
            </div>
        </>
    )
}
const Modal = ({children, onHideModal}) => {
    const modalRoot = document.getElementById('modal-root');
    return (
        <>
            { createPortal(<ModalContent  onHideModal={onHideModal}> {children} </ModalContent>, modalRoot ) }
        </>
    )
}
export default Modal;