import styles from './styles.module.scss'
import logo from '../../images/logo.svg'
import Video from '../video'
import Advantages from '../advantages'
import OrderList from '../orderList'
import Modal from '../modal'
import { useSelector } from 'react-redux'

const App = () => {
  const { isOpen } = useSelector((state) => state.modal)

  return (
    <div className={styles.component}>
      {isOpen && <Modal />}
      {!isOpen && (
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={logo} />
          </div>
          <Video />
          <Advantages />
          <OrderList />
        </div>
      )}
    </div>
  )
}

export default App
