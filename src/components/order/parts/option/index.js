import styles from './styles.module.scss'
import CheckBox from './parts/checkbox'

const Option = ({ item, onCheckbox, checkboxIndex }) => {
  return (
    <div className={styles.component}>
      <div className={styles.icon}></div>
      <div className={styles.description}>
        <p className={styles.title}>{item.name}</p>
        <p className={styles.subTitle}>{`${item.cost} ₽`}</p>
      </div>
      <CheckBox onChange={onCheckbox} checked={checkboxIndex} />
    </div>
  )
}
export default Option
