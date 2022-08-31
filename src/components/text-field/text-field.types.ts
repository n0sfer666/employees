import { TEmployeeStringTitle } from '../../types/employee.types'

export interface ITextFieldProps {
  onChange: Function
  label: string
  field: TEmployeeStringTitle
  placeholder: string
  value?: string
}
