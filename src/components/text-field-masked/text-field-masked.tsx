import React, { ChangeEvent } from 'react'
import InputMask from 'react-input-mask'
import { ITextFieldMaskedProps } from './text-field-masked.types'

const masks = {
  phone: '+7 (999) 999-99-99',
  birthday: '99.99.9999'
}

const placeholders = {
  phone: '+7 (___) ___-__-__',
  birthday: '__.__.____'
}

function TextFieldMasked ({ label, field, mask, onChange, value }: ITextFieldMaskedProps): JSX.Element {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.stopPropagation()
    onChange(field, event.target.value)
  }
  return (
    <label className='w-100'>
      <h6 className='input-label'>{label}: </h6>
      <InputMask
        mask={masks[mask]}
        placeholder={placeholders[mask]}
        value={value}
        onChange={handleInputChange}
        className='form-control'
      />
  </label>
  )
}

export default React.memo(TextFieldMasked)
