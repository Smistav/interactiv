import styles from './styles.module.scss'
import closeIcon from './images/closeIcon.svg'
// import caretDown from './images/caretDown.svg'
import ClassNames from 'classnames'

const Modal = ({ isOpen }) => {
  const closeModal = () => {
    isOpen()
  }
  return (
    <div className={styles.component}>
      <div className={styles.container}>
        <div className={styles.top}>
          <p className={styles.title}>Ваша заявка</p>
          <button className={styles.button} onClick={closeModal}>
            <img src={closeIcon} />
          </button>
        </div>
        <div className={ClassNames(styles.row, styles.rowFirst)}>
          <div>
            <p className={ClassNames(styles.header, styles.headerTop)}>Фотобудка с ширмой</p>
            <p className={styles.subHeader}>
              Размер: <span>2м x 1.5м x 2 м</span>
            </p>
          </div>
          <p>17 000 ₽</p>
        </div>
        <select className={styles.dropDown}>
          <option value={3}>3 дня</option>
        </select>
        <div className={styles.row}>
          <p className={styles.header}>Разработка макета #1</p>
          <p>2500 ₽</p>
        </div>
        <div className={styles.row}>
          <p className={styles.header}>Разработка макета #2</p>
          <p>3500 ₽</p>
        </div>
        <div className={styles.hr}></div>
        <div className={ClassNames(styles.row, styles.rowLast)}>
          <p className={ClassNames(styles.header, styles.headerDown)}>Итого:</p>
          <p className={styles.costDown}>23 000 ₽</p>
        </div>
        <div className={styles.phone}>+7(000)0000000</div>
        <button className={ClassNames(styles.button, styles.buttonDown)}>Отправить заявку</button>
      </div>
    </div>
  )
}
export default Modal
