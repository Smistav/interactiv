import styles from './styles.module.scss'
import logo from '../../images/logo.svg'
import Video from '../video'
import Advantages from '../advantages'
import OrderList from '../orderList'
import { useState } from 'react'
import Modal from '../modal'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [photoBoth, setPhotoBoth] = useState({})
  const [options, setOptions] = useState([])
  const handleOpen = (both) => {
    setIsOpen(true)
    setPhotoBoth(both)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  const handleOption = (dev) => {
    setOptions(dev)
  }
  return (
    <div className={styles.component}>
      {isOpen ? (
        <Modal isOpen={handleClose} both={photoBoth} dev={options} />
      ) : (
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={logo} />
          </div>
          <Video />
          <Advantages />
          <OrderList setPhotoBoth={handleOpen} setOption={handleOption} />
        </div>
      )}
    </div>
  )
}

export default App
