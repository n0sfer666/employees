import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/card/card'
import Filter from '../components/filter/filter'
import { TFilterState } from '../components/filter/filter.types'
import Sort from '../components/sort/sort'
import { TSortState } from '../components/sort/sort.types'
import TableEmployees from '../components/table-employees/table-employees'
import LayoutMain from '../layout/main'
import { sortEmployeeBy } from '../store/slices/employees-data'
import { TRootState, TSortAction, TSortTypes } from '../store/store.types'
import { IEmployee, TRoles } from '../types/employee.types'

const maxWidthForTable = 769
const maxWidthForTwoColumn = 710
const mobContainerClasses = 'd-flex flex-wrap justify-content-between border border-primary rounded'

function getWindowWidth (): number {
  return window.innerWidth
}

const initSortState: TSortState = [{
  id: { type: 'id', isReverse: false }
}]
const initFilterState: TFilterState = {}

function PageIndex (): JSX.Element {
  const dispatch = useDispatch()
  const employees: IEmployee[] = useSelector(
    (state: TRootState) => state.employees.list
  )
  const [windowsWidth, setWindowWidth] = useState(getWindowWidth())
  const [sort, setSort] = useState(initSortState)
  const [sortKey, setSortKey] = useState(Object.getOwnPropertyNames(initSortState[0])[0]
  )
  const [filter, setFilter] = useState(initFilterState)
  const [isFiltered, setIsFiltered] = useState(false)
  const [filteredEmployees, setFilteredEmployees] = useState([...employees])
  useEffect(() => {
    function handleWindowResize (): void {
      setWindowWidth(getWindowWidth())
    }
    window.addEventListener('resize', handleWindowResize)
  }, [])
  useEffect(() => {
    dispatch(sortEmployeeBy({ ...sort[0][sortKey] }))
    setFilter({ ...filter })
  }, [sort, sortKey, filter])
  useEffect(() => {
    let tmpEmployees = [...employees]
    const filterKeys = Object.getOwnPropertyNames(filter)
    const isFilter = filterKeys.length > 0
    setIsFiltered(isFilter)
    if (isFilter) {
      if (filter.isArchive !== undefined) {
        tmpEmployees = tmpEmployees.filter((employee) => employee.isArchive === filter.isArchive)
      }
      if (filter.role !== undefined) {
        tmpEmployees = tmpEmployees.filter((employee) => employee.role === filter.role)
      }
      setFilteredEmployees(tmpEmployees)
    }
  }, [filter, sort])

  const callbacks = {
    onSort: useCallback((key: TSortTypes, action: TSortAction) => {
      setSort([{ [key]: action }])
      setSortKey(key)
    }, [sort]),
    onFilter: useCallback(
      (key?: keyof TFilterState, value?: TRoles | boolean) => {
        key === undefined && value === undefined
          ? setFilter(initFilterState)
          : setFilter({ ...filter, [key as string]: value })
      },
      [filter])
  }

  return (
    <LayoutMain
      header={'Сотрудники'}
    >
      {
        windowsWidth >= maxWidthForTable
          ? <div className='container'>
              <TableEmployees
                employees={isFiltered ? filteredEmployees : employees}
                sortProps={{
                  onSort: callbacks.onSort,
                  sortState: sort
                }}
                filterProps={{
                  onFilter: callbacks.onFilter,
                  filterState: filter
                }} />
            </div>
          : <div>
              <Sort onSort={callbacks.onSort} sortState={sort} />
              <Filter
                onFilter={callbacks.onFilter}
                filterState={filter}
                isMobileView={windowsWidth >= maxWidthForTable}
              />
              <div className={
              windowsWidth >= maxWidthForTwoColumn
                ? mobContainerClasses
                : mobContainerClasses + ' flex-column align-items-center'
            }>
              {
                isFiltered
                  ? filteredEmployees.map((employee) => (
                    <div key={employee.id} className='m-2'>
                      <Card {...employee} />
                    </div>
                  ))
                  : employees.map((employee) => (
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
