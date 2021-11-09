import styles from './styles.module.scss'
import ellipse from '../../images/ellipse.svg'
import point from '../../images/point.svg'
import mabuta from '../../images/mabuta.png'

const Video = () => {
  return (
    <div className={styles.component}>
      <div className={styles.container}>
        <div className={styles.ellipse}>
          <img src={ellipse} />
        </div>
        <div className={styles.point}>
          <img src={point} />
        </div>
        <div className={styles.rect}>
          <div className={styles.pic}>
            <img src={mabuta} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Video
