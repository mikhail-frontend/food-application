import styles from './Input.module.scss'
const Input = ({className = '', id = '0', label = '', value = '', changeHandler = () => {}, ...htmlProps}) => {
    return (
        <div className={`${styles.input} ${className}`}>
            {label && <label htmlFor={id}>{label}</label>}
            <input type={htmlProps.type || 'text'}
                   id={id}
                   value={value}
                   onInput={(event) => changeHandler(event.target.value, id, 'input')}
                   onBlur={(event) => changeHandler(event.target.value, id, 'blur')}
                   {...htmlProps}
            />
        </div>
    )
}
export default Input