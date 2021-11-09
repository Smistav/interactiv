import styles from './styles.module.scss'

const More = ({ more }) => {
  return (
    <div className={styles.component}>
      <button onClick={more} className={styles.button}>
        Показать еще
      </button>
    </div>
  )
}
export default More
