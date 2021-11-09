import styles from './styles.module.scss'
import OptionList from './parts/optionList'
import TimeRent from './parts/timeRent'
import Done from './parts/done'
import { useState } from 'react'
import photo from '../../images/photo.png'

const Order = ({ photoBoth, onClick }) => {
  const [costDone, setCostDone] = useState(photoBoth.cost)
  const addOptionCost = (addCost) => {
    setCostDone(addCost)
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
        <OptionList cost={photoBoth.cost} addCost={addOptionCost} />
        <TimeRent />
        <Done cost={costDone} onClick={onClick} />
      </div>
    </div>
  )
}
export default Order
