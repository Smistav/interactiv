import styles from './styles.module.scss'
import OptionList from './parts/optionList'
import TimeRent from './parts/timeRent'
import Done from './parts/done'
import photo from '../../images/photo.png'
import { useDispatch, useSelector } from 'react-redux'
import { setBoth } from '../../store/slices/bothSlice'
import { open } from '../../store/slices/modalSlice'

const Order = ({ photoBoth }) => {
  const add = useSelector((state) => state.both.add)
  const dispatch = useDispatch()
  const totalCost =
    photoBoth.cost +
    add.reduce((sum, item) => {
      return sum + item.cost
    }, 0)
  const handleDone = () => {
    dispatch(setBoth(photoBoth))
    dispatch(open())
  }

  return (
    <div className={styles.component}>
      <div className={styles.container}>
        <div className={styles.galary}>
          <img src={photo} />
        </div>
        <p className={styles.header}>{photoBoth.name}</p>
        <p className={styles.subHeader}>
          Размер: <span>{photoBoth.xyz}</span>
        </p>
        <p className={styles.titleAddOptions}>Доп. опции</p>
        <OptionList />
        <TimeRent />
        <Done cost={totalCost} onClick={handleDone} />
      </div>
    </div>
  )
}
export default Order
