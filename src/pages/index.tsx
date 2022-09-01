import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import TableEmployees from '../components/table-employees/table-employees'
import LayoutMain from '../layout/main'
import { TRootState } from '../store/store.types'
import { IEmployee } from '../types/employee.types'

const maxWidthForTable = 768

function getWindowWidth (): number {
  return window.innerWidth
}

function PageIndex (): JSX.Element {
  const [windowsWidth, setWindowWidth] = useState(getWindowWidth())
  const employees: IEmployee[] = useSelector((state: TRootState) => state.employees.list)
  useEffect(() => {
    function handleWindowResize (): void {
      setWindowWidth(getWindowWidth())
    }
    window.addEventListener('resize', handleWindowResize)
  }, [])
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
