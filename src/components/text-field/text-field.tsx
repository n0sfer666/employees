import React, { ChangeEvent } from 'react'
import { ITextFieldProps } from './text-field.types'

function TextField ({ label, field, onChange, placeholder, value }: ITextFieldProps): JSX.Element {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.stopPropagation()
    onChange(field, event.target.value)
  }
  return (
      <label className='w-100'>
        <h6 className='input-label'>{label}: </h6>
        <input type='text' className='form-control' placeholder={placeholder} value={value} onChange={handleInputChange} />
    </label>
  )
}

export default React.memo(TextField)
