import styles from './styles.module.scss'
import logo from '../../images/logo.svg'
import Video from '../video'
import Advantages from '../advantages'
import OrderList from '../orderList'
import { useState } from 'react'
import Modal from '../modal'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(true)
  }
  const handleOpen = () => {
    setIsOpen(false)
  }
  return (
    <div className={styles.component}>
      {isOpen ? (
        <Modal isOpen={handleOpen} />
      ) : (
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={logo} />
          </div>
          <Video />
          <Advantages />
          <OrderList onClick={handleClick} />
        </div>
      )}
    </div>
  )
}

export default App
