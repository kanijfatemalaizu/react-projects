import styles from './Button.module.css'

const Button = ({isOutline,icon,text}) => {
  return (
    <div>
        <button className={isOutline ? styles.btn_outline : styles.btn_primary}> {icon}{text}</button>
    </div>
  )
}

export default Button