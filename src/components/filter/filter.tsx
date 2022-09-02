import React, { ChangeEvent, useState } from 'react'
import { TRoles } from '../../types/employee.types'
import { defaultRoles, defaultRolesRu } from '../../utils/employee-handlers'
import { IFilterProps } from './filter.types'

function Filter ({ filterState, onFilter, isMobileView }: IFilterProps): JSX.Element {
  const isMobileLayout = isMobileView === undefined || isMobileView
  const [isFilter, setIsFilter] = useState(false)
  const [roleIsDefault, setRoleIsDefault] = useState(true)
  const handleButtonCloseClick = (): void => {
    const tmpIsFilter = !isFilter
    setIsFilter(tmpIsFilter)
    if (!tmpIsFilter) {
      onFilter()
    }
  }
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    event.stopPropagation()
    const { value } = event.target
    if (roleIsDefault) setRoleIsDefault(false)
    onFilter('role', value as TRoles)
  }
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.stopPropagation()
    const { isArchive } = filterState
    onFilter('isArchive', isArchive === undefined ? true : !isArchive)
  }
  return (
    !isFilter
      ? <button
        className='Filter__button-close p-0 ps-2 pe-2 m-1'
        onClick={handleButtonCloseClick}
      >
        Фильтр
      </button>
      : <div className={`d-flex align-items-center justify-content-end p-1${!isMobileLayout ? ' m-1' : ' w-50'}`}>
          Должность
          {': '}
          <select
            className='form-select cursor-pointer flex-grow-1 h-100 w-25 d-inline-block ms-1 me-1 p-0 ps-3 pe-3'
            onChange={handleSelectChange}
          >
            {(roleIsDefault) && (<option key='default'>...</option>)}
            {defaultRoles.map((role, index) => (
              <option key={role} value={role}>{defaultRolesRu[index]}</option>
            ))}
          </select>
          {' '}
          <label className={`cursor-pointer ms-1 me-1${
            filterState.isArchive === undefined ? ' opacity-25' : ''
          }`}>
            В архиве
            {': '}
            <input
              type='checkbox'
              className='align-middle'
              onChange={handleCheckboxChange}
              checked={
                filterState.isArchive === undefined
                  ? false
                  : filterState.isArchive
                } />
          </label>
          {'    '}
          <button
            className='Filter__button-close ms-1 me-1'
            onClick={handleButtonCloseClick}
          >✖</button>
      </div>
  )
}

export default React.memo(Filter)
