import React from 'react'
import { useSelector } from 'react-redux'
import LayoutMain from '../../layout/main'
import { TRootState } from '../../store/store.types'

function PageEmployeeAdd (): JSX.Element {
  const newEmployeeID = useSelector((state: TRootState) => state.employees.newEmployeeID)
  return (
    <LayoutMain header='Добавление сотрудника'>
      <p>newEmployeeID: {newEmployeeID}</p>
    </LayoutMain>
  )
}

export default PageEmployeeAdd
