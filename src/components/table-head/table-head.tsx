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
        <td colSpan={titles.length}>
          <span key='sort'>sort</span>{' '}<span key='filter'>filter</span>
        </td>
      </tr>
    </thead>
  )
}

export default React.memo(TableHead)
