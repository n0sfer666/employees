import { createSlice } from '@reduxjs/toolkit'
import { getDateFromString, getNewEmployeeID } from '../../utils/employee-handlers'
import {
  IEmployeesSliceState,
  TEditPayload,
  TInitPayload,
  TSortPayload
} from '../store.types'

const initialState: IEmployeesSliceState = {
  list: [],
  isInit: false,
  newEmployeeID: -1
}

const employeesDataSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    initEmployees: (state: IEmployeesSliceState, action: TInitPayload) => {
      if (state.list.length === 0) {
        state.list = action.payload
        state.isInit = true
      }
      state.newEmployeeID = Number(getNewEmployeeID(state.list))
    },
    addEmployee: (state: IEmployeesSliceState, action: TEditPayload) => {
      if (state.isInit) {
        state.list = [...state.list, action.payload]
        state.newEmployeeID = Number(getNewEmployeeID(state.list))
      }
    },
    editEmployee: (state: IEmployeesSliceState, action: TEditPayload) => {
      if (state.isInit) {
        state.list = state.list.map(
          (employee) => employee.id === action.payload.id
            ? action.payload
            : employee
        )
      }
    },
    sortEmployeeBy: (state: IEmployeesSliceState, action: TSortPayload) => {
      const { type, isReverse } = action.payload
      state.list = state.list.sort(
        function (a, b) {
          switch (type) {
            case 'name': {
              return a.name.localeCompare(b.name)
            }
            case 'birthday': {
              const firstBirthday = getDateFromString(a.birthday).getTime()
              const secondBirthday = getDateFromString(b.birthday).getTime()
              return firstBirthday - secondBirthday
            }

            default: {
              return a.id - b.id
            }
          }
        }
      )
      if (isReverse !== undefined && isReverse) {
        state.list = state.list.reverse()
      }
    }
  }
})

export default employeesDataSlice.reducer
export const {
  initEmployees,
  addEmployee,
  editEmployee,
  sortEmployeeBy
} = employeesDataSlice.actions
