import React, { ChangeEvent } from 'react'
import { ICheckboxProps } from './checkbox.types'

function Checkbox ({ isChecked, label, onChange }: ICheckboxProps): JSX.Element {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.stopPropagation()
    onChange()
  }
  return (
    <div className='d-flex align-items-center justify-content-between pt-2 pb-2'>
      <label>
      {label}
      {': '}
      <input
        type='checkbox'
        className='form-check-input'
        onChange={handleInputChange}
        checked={isChecked}
      />
    </label>
    </div>
  )
}

export default React.memo(Checkbox)
