import styles from './styles.module.scss'
import irr from '../../images/irr.svg'
import mask from '../../images/mask.svg'
import cards from '../../images/cards.svg'
import note from '../../images/note.svg'

const Advantages = () => {
  return (
    <div className={styles.component}>
      <div className={styles.container}>
        <p className={styles.title}>
          <span>Фото на</span> праздник
        </p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur <u>adipiscing elit</u>, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <div className={styles.block}>
          <div className={styles.row}>
            <div className={styles.item}>
              <img className={styles.icon} src={irr} />
              <p className={styles.paragraph}>Безлимитная печать фото</p>
            </div>
            <div className={styles.item}>
              <img className={styles.icon} src={mask} />
              <p className={styles.paragraph}>Фотореквизит в наличии</p>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.item}>
              <img className={styles.icon} src={cards} />
              <p className={styles.paragraph}>Фотоотчет в электронном виде</p>
            </div>
            <div className={styles.item}>
              <img className={styles.icon} src={note} />
              <p className={styles.paragraph}>Ценыниже рынка</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Advantages
