import { configureStore } from '@reduxjs/toolkit'
import employeesDataSlice from './slices/employees-data'

const store = configureStore({
  reducer: {
    employees: employeesDataSlice
  }
})

export default store
