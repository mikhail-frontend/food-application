import {forwardRef, useRef, useImperativeHandle} from "react";
import styles from './Input.module.scss'

const Input = forwardRef(({
                              className = '',
                              id = '0',
                              label = '', value = '', changeHandler = () => {
    }, ...htmlProps  }, ref) => {
    const inputRef = useRef();
    
    const onFocus = () => {
        inputRef.current?.focus();
    }
    useImperativeHandle(ref, () => ({
        onFocus
    }));

    return (
        <div className={`${styles.input} ${className}`}>
            {label && <label htmlFor={id}>{label}</label>}
            <input type={htmlProps.type || 'text'}
                   id={id}
                   value={value}
                   ref={inputRef}
                   onInput={(event) => changeHandler(event.target.value, id, 'input')}
                   onBlur={(event) => changeHandler(event.target.value, id, 'blur')}
                   {...htmlProps}
            />
        </div>
    )
});

export default Input