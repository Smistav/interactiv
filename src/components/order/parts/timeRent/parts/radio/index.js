import styles from './styles.module.scss'
import Classnames from 'classnames'

const Radio = ({ onChange, checked, value, name }) => {
  const radioClassName = Classnames(styles.iconRadio, { [styles.iconActive]: checked })
  return (
    <label className={styles.iconContainer}>
      <input type='radio' value={value} checked={checked} onChange={onChange} />
      <span className={radioClassName}>{name}</span>
    </label>
  )
}

export default Radio
