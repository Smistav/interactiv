import styles from './styles.module.scss'
import CheckBox from './parts/checkbox'
import iconPhoto from '../../../../images/photoOption.png'

const Option = ({ item, onCheckbox, checkboxIndex }) => {
  return (
    <div className={styles.component}>
      <div className={styles.icon}>
        <img src={iconPhoto} />
      </div>
      <div className={styles.description}>
        <p className={styles.title}>{item.name}</p>
        <p className={styles.subTitle}>{`${item.cost} ₽`}</p>
      </div>
      <CheckBox onChange={onCheckbox} checked={checkboxIndex} />
    </div>
  )
}
export default Option
