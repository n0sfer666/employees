import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/card/card'
import TableEmployees from '../components/table-employees/table-employees'
import LayoutMain from '../layout/main'
import { TRootState } from '../store/store.types'
import { IEmployee } from '../types/employee.types'

const maxWidthForTable = 769
const maxWidthForTwoColumn = 710
const mobContainerClasses = 'd-flex flex-wrap justify-content-between border border-primary'

function getWindowWidth (): number {
  return window.innerWidth
}

function PageIndex (): JSX.Element {
  const [windowsWidth, setWindowWidth] = useState(getWindowWidth())
  const employees: IEmployee[] = useSelector(
    (state: TRootState) => state.employees.list
  )
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
      {
        windowsWidth >= maxWidthForTable
          ? <div className='container'>
              <TableEmployees employees={employees} />
            </div>
          : <div className={
            windowsWidth >= maxWidthForTwoColumn
              ? mobContainerClasses
              : mobContainerClasses + ' flex-column align-items-center'
          }>
            {
              employees.map((employee) => (
                <div key={employee.id} className='m-2'>
                  <Card {...employee} />
                </div>
              ))
            }
          </div>
      }
    </LayoutMain>
  )
}

export default PageIndex
