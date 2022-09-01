import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/card/card'
import Sort from '../components/sort/sort'
import { TSortState } from '../components/sort/sort.types'
import TableEmployees from '../components/table-employees/table-employees'
import LayoutMain from '../layout/main'
import { sortEmployeeBy } from '../store/slices/employees-data'
import { TRootState, TSortAction, TSortTypes } from '../store/store.types'
import { IEmployee } from '../types/employee.types'

const maxWidthForTable = 769
const maxWidthForTwoColumn = 710
const mobContainerClasses = 'd-flex flex-wrap justify-content-between border border-primary rounded'

function getWindowWidth (): number {
  return window.innerWidth
}

const initSortState: TSortState = [{
  id: { type: 'id', isReverse: false }
}]

function PageIndex (): JSX.Element {
  const dispatch = useDispatch()
  const [windowsWidth, setWindowWidth] = useState(getWindowWidth())
  const [sort, setSort] = useState(initSortState)
  const [sortKey, setSortKey] = useState(
    Object.getOwnPropertyNames(initSortState)[0]
  )
  const employees: IEmployee[] = useSelector(
    (state: TRootState) => state.employees.list
  )
  useEffect(() => {
    function handleWindowResize (): void {
      setWindowWidth(getWindowWidth())
    }
    window.addEventListener('resize', handleWindowResize)
  }, [])
  useEffect(() => {
    dispatch(sortEmployeeBy({ ...sort[0][sortKey] }))
  }, [sort, sortKey])

  const callbacks = {
    onSort: useCallback((key: TSortTypes, action: TSortAction) => {
      setSort([{ [key]: action }])
      setSortKey(key)
    }, [sort])
  }

  return (
    <LayoutMain
      header={'Сотрудники'}
    >
      {
        windowsWidth >= maxWidthForTable
          ? <div className='container'>
              <TableEmployees
                employees={employees}
                sortProps={{
                  onSort: callbacks.onSort,
                  sortState: sort
                }} />
            </div>
          : <div>
              <Sort onSort={callbacks.onSort} sortState={sort} />
              <div className={
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
          </div>
      }
    </LayoutMain>
  )
}

export default PageIndex
