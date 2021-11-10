import styles from './styles.module.scss'
import OptionList from './parts/optionList'
import TimeRent from './parts/timeRent'
import Done from './parts/done'
import { useState } from 'react'
import photo from '../../images/photo.png'

const Order = ({ photoBoth, setPhotoBoth, setOption }) => {
  const [costDone, setCostDone] = useState(photoBoth.cost)
  const addOptionCost = (addCost) => {
    setCostDone(addCost)
  }
  const handleDone = () => {
    setPhotoBoth(photoBoth)
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
        <OptionList cost={photoBoth.cost} addCost={addOptionCost} devCheckArray={setOption} />
        <TimeRent />
        <Done cost={costDone} onClick={handleDone} />
      </div>
    </div>
  )
}
export default Order
