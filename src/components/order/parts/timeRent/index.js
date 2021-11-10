import { useState } from 'react'
import styles from './styles.module.scss'
import Radio from './parts/radio'
import { time } from '../../../../utils/constans'

const TimeRent = () => {
  const [value, setValue] = useState('1 час')
  const changeValue = (event) => {
    setValue(event.target.value)
  }
  return (
    <div className={styles.component}>
      <p className={styles.title}>Укажите время аренды</p>
      <div className={styles.container}>
        {time.map((item, index) => (
          <Radio
            onChange={changeValue}
            checked={value === item ? true : false}
            value={item}
            name={item}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}
export default TimeRent
