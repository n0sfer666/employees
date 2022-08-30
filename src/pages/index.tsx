import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import TableEmployees from '../components/table-employees/table-employees'
import LayoutMain from '../layout/main'
import { TRootState } from '../store/store.types'
import { IEmployee } from '../types/employee.types'

function PageIndex (): JSX.Element {
  const employees: IEmployee[] = useSelector((state: TRootState) => state.employees.list)
  return (
    <LayoutMain
      header={'Home Page'}
    >
      <nav>
        <Link to={'/employee-add'}>Employee ADD</Link>
        {' '}
        <Link to={'/employee-edit'}>Employee EDIT</Link>
      </nav>
      <TableEmployees employees={employees} />
    </LayoutMain>
  )
}

export default PageIndex
