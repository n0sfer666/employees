import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import defaultData from '../../task/employees.json'
import Router from '../router/router'
import { initEmployees } from '../store/slices/employees-data'
import { setLocation } from '../store/slices/locations-data'
import { ISetLocationAction, TRootState } from '../store/store.types'
import { TRoles } from '../types/employee.types'

const initData = defaultData.map((employee) => {
  return { ...employee, role: employee.role as TRoles }
})

function App (): JSX.Element {
  const isDeploy = useMemo(() => window.location.hostname.toLowerCase() !== 'localhost', [])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initEmployees(initData))
    if (isDeploy) {
      const payload: ISetLocationAction[] = [
        { type: 'home', value: '/employee/' },
        { type: 'add', value: '/employee/employee-add' },
        { type: 'edit', value: '/employee/employee-edit' }
      ]
      dispatch((setLocation(payload)))
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
