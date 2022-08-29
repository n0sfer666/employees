import { IEmployee } from '../types/employee.types'
import store from './store'

export type TRootState = ReturnType<typeof store.getState>

export interface IEmployeesDataSliceState {
  list: IEmployee[]
  isInit: boolean
  newEmployeeID: number
}
