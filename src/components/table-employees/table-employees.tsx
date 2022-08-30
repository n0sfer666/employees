import React from 'react'
import TableHead from '../table-head/table-head'
import { ITableEmployeesProps } from './table-employees.types'

function TableEmployees ({ employees }: ITableEmployeesProps): JSX.Element {
  return (
    <table className='table table-striped'>
      <TableHead titles={Object.keys(employees[0])} />
      <tbody>
        <tr>table body</tr>
      </tbody>
    </table>
  )
}

export default React.memo(TableEmployees)
