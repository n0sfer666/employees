import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IEmployee } from '../../types/employee.types'
import { getNewEmployeeID, isRole } from '../../utils/employee-handlers'
import { IEmployeesDataSliceState } from '../store.types'

const initialState: IEmployeesDataSliceState = {
  list: [],
  isInit: false,
  newEmployeeID: -1
}

const employeesDataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    initEmployees: (state: IEmployeesDataSliceState, action: PayloadAction<IEmployee[]>) => {
      if (state.list.length === 0) {
        state.list = action.payload
        state.isInit = true
      }
      const newEmployeeID = Number(getNewEmployeeID(state.list))
      state.newEmployeeID = Number.isNaN(newEmployeeID) ? -1 : newEmployeeID
    },
    addEmployee: (state: IEmployeesDataSliceState, action: PayloadAction<IEmployee>) => {
      if (state.isInit) {
        const isCorrectID = action.payload.id === state.list[length - 1].id + 1
        if (isCorrectID) {
          state.list.push(action.payload)
          const newEmployeeID = Number(getNewEmployeeID(state.list))
          state.newEmployeeID = Number.isNaN(newEmployeeID) ? -1 : newEmployeeID
        } else {
          throw new Error("Incorrect employee's ID")
        }
      } else {
        throw new Error("Empty employee's data. Use action: initEmployee(...)")
      }
    },
    editEmployee: (state: IEmployeesDataSliceState, action: PayloadAction<IEmployee>) => {
      if (state.isInit) {
        const isCorrectRole = isRole(action.payload.role)
        if (isCorrectRole) {
          state.list = state.list.map((employee) => employee.id === action.payload.id ? { ...action.payload } : { ...employee })
        } else {
          throw new Error("Incorrect employee's Role")
        }
      } else {
        throw new Error("Empty employee's data. Use action: initEmployee(...)")
      }
    }
  }
})

export default employeesDataSlice.reducer
export const { initEmployees, addEmployee, editEmployee } = employeesDataSlice.actions
