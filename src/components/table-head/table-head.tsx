import React from 'react'
import { ITableHeadProps } from './table-head.types'

function TableHead ({ titles }: ITableHeadProps): JSX.Element {
  return (
    <thead>
      <tr>
        {
          titles.map((title) => (
            <th scope='col' key={title}>{title}</th>
          ))
        }
      </tr>
      <tr>
        <span key='sort'>sort</span>{' '}<span key='filter'>filter</span>
      </tr>
    </thead>
  )
}

export default React.memo(TableHead)
