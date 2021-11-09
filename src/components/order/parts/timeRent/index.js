import { useState } from 'react'
import styles from './styles.module.scss'
import Radio from './parts/radio'

const TimeRent = () => {
  const time = ['1 час', '2 часа', '3 часа', '5 часов', 'выставка 2 дня', 'выставка 3 дня']
  const [value, setValue] = useState('1')
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
