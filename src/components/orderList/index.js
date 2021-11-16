import styles from './styles.module.scss'
import Order from '../order'
import More from '../orderList/parts/more'
import { photoBoth } from '../../utils/constans'
import { useState } from 'react'

const OrderList = () => {
  const [count, setCount] = useState(1)
  const handleMore = () => {
    setCount(count + 1)
  }
  return (
    <div className={styles.component}>
      <p className={styles.title}>Фотобудки</p>
      {photoBoth.slice(0, count).map((item, index) => (
        <Order photoBoth={item} key={index} />
      ))}
      <More more={handleMore} />
    </div>
  )
}
export default OrderList
