import styles from './styles.module.scss'

const Done = ({ cost, onClick }) => {
  return (
    <div className={styles.component}>
      <div className={styles.summ}>{`${cost} ₽`}</div>
      <button onClick={onClick} className={styles.button}>
        Оставить заявку
      </button>
    </div>
  )
}
export default Done
