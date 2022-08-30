import React from 'react'
import TableHead from '../table-head/table-head'
import { ITableEmployeesProps } from './table-employees.types'

function TableEmployees ({ employees }: ITableEmployeesProps): JSX.Element {
  return (
    <table className='table table-striped table-borderless table-info'>
      <TableHead titles={Object.keys(employees[0])} />
      <tbody>
        {
          employees.map((employee) => (
            <tr key={employee.id}>
              {
                Object.keys(employee).map((key) => (
                  key === 'id'
                    ? <th scope='row' key={key}>{employee[key]}</th>
                    : <td key={key}>{employee[key].toString()}</td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default React.memo(TableEmployees)
