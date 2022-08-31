import React, { ChangeEvent } from 'react'
import { ITextFieldProps } from './text-field.types'

function TextField ({ label, field, onChange, placeholder, value }: ITextFieldProps): JSX.Element {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.stopPropagation()
    onChange(field, event.target.value)
  }
  return (
    <div>
      <label className='input-group'>
        <h4 className='input-group-text'>{label}: </h4>
        <input type='text' className='form-control' placeholder={placeholder} value={value} onChange={handleInputChange} />
    </label>
    </div>
  )
}

export default React.memo(TextField)
