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
export type TInitPayload = PayloadAction<IEmployee[]>
export type TEditPayload = PayloadAction<IEmployee>
export type TSortPayload = PayloadAction<TSortTypes>
