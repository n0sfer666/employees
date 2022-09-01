import React from 'react'
import { ITableHeadProps } from './table-head.types'

const defaultTitles = ['id', 'name', 'isArchive', 'role', 'phone', 'birthday']
const defaultTitlesRu = ['ИД', 'Имя Фамилия', 'В архиве?', 'Должность', 'Телефон', 'Дата рождения']

function TableHead ({ titles }: ITableHeadProps): JSX.Element {
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
        <td colSpan={titles.length} style={{ fontSize: '10px', padding: '0 0 0 8px' }}>
          <span key='sort'>sort</span>{' '}<span key='filter'>filter</span>
        </td>
      </tr>
    </thead>
  )
}

export default React.memo(TableHead)
