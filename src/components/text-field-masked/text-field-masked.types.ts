import { TEmployeeStringTitle } from '../../types/employee.types'

export type TMaskType = 'phone' | 'birthday'

export interface ITextFieldMaskedProps {
  mask: TMaskType
  field: TEmployeeStringTitle
  label: string
  onChange: Function
  value?: string
}
