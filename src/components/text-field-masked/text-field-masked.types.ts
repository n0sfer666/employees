export type TMaskType = 'phone' | 'birthday'

export interface ITextFieldMaskedProps {
  mask: TMaskType
  label: string
  onChange: Function
  value?: string
}
