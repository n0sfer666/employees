import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import defaultData from '../../task/employees.json'
import Router from '../router/router'
import { initEmployees } from '../store/slices/employees-data'
import { setLocation } from '../store/slices/locations-data'
import { TRootState } from '../store/store.types'
import { TRoles } from '../types/employee.types'

const initData = defaultData.map((employee) => {
  return { ...employee, role: employee.role as TRoles }
})

function App (): JSX.Element {
  const dispatch = useDispatch()
  const homeLocation = useSelector((state: TRootState) => state.locations.home)
  useEffect(() => {
    dispatch(initEmployees(initData))
    const homePath = window.location.pathname
    if (homePath !== homeLocation) {
      dispatch(setLocation({ type: 'home', value: homePath.slice(1) }))
      console.warn("Home location wasn't '/' and changed to ", homePath.slice(1))
    }
  }, [])

  const isInitData = useSelector((state: TRootState) => state.employees.isInit)

  return (
    isInitData
      ? <Router />
      : <p className='text-red-600'>Что-то пошло не так...</p>
  )
}

export default App
