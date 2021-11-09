import styles from './styles.module.scss'
import checkedImg from './image/checked.svg'

const CheckBox = ({ onChange, checked }) => {
  return (
    <label className={styles.iconContainer}>
      <input type='checkbox' checked={checked} onChange={onChange} />
      <span className={styles.iconCheckbox}>{checked ? <img src={checkedImg} /> : ''}</span>
    </label>
  )
}

export default CheckBox
