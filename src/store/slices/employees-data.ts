import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IEmployee } from '../../types/employee.types'
import { getNewEmployeeID } from '../../utils/employee-handlers'
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
      state.newEmployeeID = Number(getNewEmployeeID(state.list))
    },
    addEmployee: (state: IEmployeesDataSliceState, action: PayloadAction<IEmployee>) => {
      if (state.isInit) {
        state.list.push(action.payload)
        state.newEmployeeID = Number(getNewEmployeeID(state.list))
      }
    },
    editEmployee: (state: IEmployeesDataSliceState, action: PayloadAction<IEmployee>) => {
      if (state.isInit) {
        state.list = state.list.map(
          (employee) => employee.id === action.payload.id
            ? action.payload
            : employee
        )
      }
    }
  }
})

export default employeesDataSlice.reducer
export const { initEmployees, addEmployee, editEmployee } = employeesDataSlice.actions
