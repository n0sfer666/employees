import React from 'react'
import { useSelector } from 'react-redux'
import TableEmployees from '../components/table-employees/table-employees'
import LayoutMain from '../layout/main'
import { TRootState } from '../store/store.types'
import { IEmployee } from '../types/employee.types'

function PageIndex (): JSX.Element {
  const employees: IEmployee[] = useSelector((state: TRootState) => state.employees.list)
  return (
    <LayoutMain
      header={'Сотрудники'}
    >
      <div className='container'>
        <TableEmployees employees={employees} />
      </div>
    </LayoutMain>
  )
}

export default PageIndex
