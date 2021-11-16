import styles from './styles.module.scss'
import closeIcon from './images/closeIcon.svg'
import { time } from '../../utils/constans'
import ClassNames from 'classnames'
import vector from '../modal/images/caretDown.svg'
import InputMask from 'react-input-mask'
import { useState } from 'react'
import { close } from '../../store/slices/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { clearAdd } from '../../store/slices/bothSlice'

const Modal = () => {
  const [phone, setPhone] = useState('')
  const both = useSelector((state) => state.both.both)
  const add = useSelector((state) => state.both.add)

  const dispatch = useDispatch()
  const closeModal = () => {
    dispatch(close())
    dispatch(clearAdd())
  }
  const totalCost =
    both.cost +
    add.reduce((sum, item) => {
      return sum + item.cost
    }, 0)
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
            <p className={ClassNames(styles.header, styles.headerTop)}>{both.name}</p>
            <p className={styles.subHeader}>
              Размер: <span>{both.xyz}</span>
            </p>
          </div>
          <p>{both.cost}</p>
        </div>
        <select className={styles.dropDown}>
          {time.map((item, index) => (
            <option value={index} key={index}>
              {item}
            </option>
          ))}
        </select>
        {add.length !== 0 ? (
          add.map((item, index) => (
            <li className={styles.optional} key={index}>
              <div className={styles.row}>
                <p className={styles.header}>{item.name}</p>
                <p>{`${item.cost}₽`}</p>
              </div>
            </li>
          ))
        ) : (
          <p className={styles.header}></p>
        )}
        <div className={styles.hr}></div>
        <div className={ClassNames(styles.row, styles.rowLast)}>
          <p className={ClassNames(styles.header, styles.headerDown)}>Итого:</p>
          <p className={styles.costDown}>{`${totalCost} ₽`}</p>
        </div>
        <div className={styles.phone}>
          <InputMask
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            mask='+7\(999) 999-9999'
            maskPlaceholder='0'
            style={{ border: 'none', outline: 'none' }}
            alwaysShowMask={true}
          />
          <div className={styles.call}>
            Позвоните мне
            <img src={vector} />
          </div>
        </div>
        <button onClick={closeModal} className={ClassNames(styles.button, styles.buttonDown)}>
          Отправить заявку
        </button>
      </div>
    </div>
  )
}
export default Modal
