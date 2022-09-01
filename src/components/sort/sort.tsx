import React, { MouseEvent } from 'react'
import { TSortTypes } from '../../store/store.types'
import { sortTypes, sortTypesRu } from '../../utils/employee-handlers'
import { ISortProps, TSortState } from './sort.types'

const getRuName = (type: TSortTypes): string => {
  return sortTypesRu[sortTypes.indexOf(type)]
}
const getTriangle = (sortState: TSortState, sortType: TSortTypes): string => {
  const isSorted = Object.getOwnPropertyNames(sortState[0])[0] === sortType
  const isReverse = sortState[0][sortType] !== undefined
    ? sortState[0][sortType].isReverse
    : false

  return !isSorted
    ? ''
    : isReverse ?? false
      ? '▼'
      : '▲'
}

function Sort ({ onSort, sortState }: ISortProps): JSX.Element {
  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation()
    const { name } = event.currentTarget
    const type = name as TSortTypes
    onSort(type, Object.getOwnPropertyNames(sortState[0])[0] === name
      ? { type, isReverse: !sortState[0][name].isReverse }
      : { type, isReverse: false }
    )
  }
  return (
    <div className='d-flex'>
      Сортировка:
      {
        sortTypes.map((sortType) => (
          <button
          key={sortType}
          name={sortType}
          onClick={handleButtonClick}
          className='Sort-button'
          >
            {
              getRuName(sortType) +
              ' ' +
              getTriangle(sortState, sortType)
            }
          </button>
        ))
      }
    </div>
  )
}

export default React.memo(Sort)
