import React from 'react'
import { defaultTitles, defaultTitlesRu } from '../../utils/employee-handlers'
import Filter from '../filter/filter'
import Sort from '../sort/sort'
import { ITableHeadProps } from './table-head.types'

function TableHead ({ titles, sortProps, filterProps }: ITableHeadProps): JSX.Element {
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
        <td
          colSpan={titles.length}
          style={{ fontSize: '10px', padding: '8px' }}>
          <div className='d-flex justify-content-between align-items-center'>
            <Sort {...sortProps} />
            <Filter {...filterProps} />
          </div>
        </td>
      </tr>
    </thead>
  )
}

export default React.memo(TableHead)
