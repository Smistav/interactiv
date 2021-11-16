import styles from './styles.module.scss'
import Option from '../option'
import { useState } from 'react'
import { devLayout } from '../../../../utils/constans'
import { useDispatch } from 'react-redux'
import { setAdd, clearAdd } from '../../../../store/slices/bothSlice'

const OptionList = () => {
  const [checkboxArray, setCheckboxArray] = useState(Array(devLayout.length).fill(false))
  const dispatch = useDispatch()

  const handleCheckboxChange = (position) => {
    const updateCheckboxArray = checkboxArray.map((item, index) =>
      index === position ? !item : item,
    )
    setCheckboxArray(updateCheckboxArray)
    dispatch(clearAdd())
    updateCheckboxArray.map((item, index) => {
      if (item === true) {
        dispatch(setAdd(devLayout[index]))
      }
    })
  }

  return (
    <div className={styles.component}>
      {devLayout.map((item, index) => (
        <Option
          item={item}
          onCheckbox={() => handleCheckboxChange(index)}
          checkboxIndex={checkboxArray[index]}
          key={index}
        />
      ))}
    </div>
  )
}
export default OptionList
