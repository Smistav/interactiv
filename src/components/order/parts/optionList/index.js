import styles from './styles.module.scss'
import Option from '../option'
import { useState } from 'react'
import { devLayout } from '../../../../utils/constans'

const OptionList = ({ cost, addCost, devCheckArray }) => {
  const [checkboxArray, setCheckboxArray] = useState(Array(devLayout.length).fill(false))

  const handleCheckboxChange = (position) => {
    const updateCheckboxArray = checkboxArray.map((item, index) =>
      index === position ? !item : item,
    )
    setCheckboxArray(updateCheckboxArray)
    const devCheck = []
    const totalOpt = updateCheckboxArray.reduce((sum, item, index) => {
      if (item === true) {
        devCheck.push(devLayout[index])
        return sum + devLayout[index].cost
      }
      return sum
    }, cost)
    addCost(totalOpt)
    devCheckArray(devCheck)
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
