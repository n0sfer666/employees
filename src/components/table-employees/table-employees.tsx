import React from 'react'
import { ITableEmployeesProps } from './table-employees.types'

function TableEmployees ({ employees }: ITableEmployeesProps): JSX.Element {
  return (
    <table>
      <thead>
        <tr>table-head</tr>
      </thead>
      <tbody>
        <tr>table body</tr>
      </tbody>
    </table>
  )
}

export default React.memo(TableEmployees)
