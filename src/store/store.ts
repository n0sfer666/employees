import { configureStore } from '@reduxjs/toolkit'
import employeesDataSlice from './slices/employees-data'
import locationsData from './slices/locations-data'

const store = configureStore({
  reducer: {
    employees: employeesDataSlice,
    locations: locationsData
  }
})

export default store
