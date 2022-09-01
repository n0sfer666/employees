import React from 'react'
import { defaultTitles, defaultTitlesRu } from '../../utils/employee-handlers'
import Sort from '../sort/sort'
import { ITableHeadProps } from './table-head.types'

function TableHead ({ titles, sortProps }: ITableHeadProps): JSX.Element {
  return (
    <thead>
      <tr>
        {
          titles.map((title) => (
            <th scope='col' className={title === 'name' ? 'text-start' : ''} key={title}>{
              defaultTitlesRu[defaultTitles.indexOf(title as string)]
            }</th>
          ))
        }
      </tr>
      <tr className='text-start'>
        <td colSpan={titles.length} style={{ fontSize: '10px', padding: '8px' }}>
          <Sort {...sortProps} />{' '}<span key='filter'>filter</span>
        </td>
      </tr>
    </thead>
  )
}

export default React.memo(TableHead)
