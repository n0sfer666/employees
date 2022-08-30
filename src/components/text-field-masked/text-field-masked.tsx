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

function TextFieldMasked ({ label, mask, onChange, value }: ITextFieldMaskedProps): JSX.Element {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.stopPropagation()
    onChange(event.target.value)
  }
  return (
    <div>
      <label className='input-group'>
        <h4 className='input-group-text'>{label}: </h4>
        <InputMask
          mask={masks[mask]}
          placeholder={placeholders[mask]}
          value={value}
          onChange={handleInputChange}
          className='form-control'
        />
    </label>
    </div>
  )
}

export default React.memo(TextFieldMasked)
