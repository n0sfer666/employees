import { PayloadAction } from '@reduxjs/toolkit'
import { IEmployee } from '../types/employee.types'
import store from './store'

export type TRootState = ReturnType<typeof store.getState>

export interface IEmployeesSliceState {
  list: IEmployee[]
  isInit: boolean
  newEmployeeID: number
}

export type TSortTypes = 'id' | 'name' | 'birthday'
export interface TSortAction {
  type: TSortTypes
  isReverse: boolean
}
export type TInitPayload = PayloadAction<IEmployee[]>
export type TEditPayload = PayloadAction<IEmployee>
export type TSortPayload = PayloadAction<TSortAction>

export interface ILocationsSliceState {
  home: string
  add: string
  edit: string
}
export interface ISetLocationAction {
  type: keyof ILocationsSliceState
  value: string
}
export type TSetLocationPayload = PayloadAction<ISetLocationAction | ISetLocationAction[]>
