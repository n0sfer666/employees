export type TRoles = 'cook' | 'driver' | 'waiter'
export enum ERoles {'cook', 'driver', 'waiter'}

interface IStringKeyObject {
  [key: string]: number | string | boolean
}

export interface IEmployee extends IStringKeyObject {
  id: number
  name: string
  isArchive: boolean
  role: TRoles
  phone: string
  birthday: string
}

export type TEmployeeTitle = keyof IEmployee
