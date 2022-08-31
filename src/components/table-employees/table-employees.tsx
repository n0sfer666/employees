import React, { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import TableHead from '../table-head/table-head'
import { ITableEmployeesProps } from './table-employees.types'

function TableEmployees ({ employees }: ITableEmployeesProps): JSX.Element {
  const navigate = useNavigate()
  const handleTrClick = (event: MouseEvent<HTMLTableRowElement>): void => {
    event.stopPropagation()
    navigate(`/employee-edit/${event.currentTarget.id}`)
  }
  return (
    <table className='table table-striped table-borderless table-info'>
      <TableHead titles={Object.keys(employees[0])} />
      <tbody>
        {
          employees.map((employee) => (
            <tr
              className='clickable'
              id={employee.id.toString()}
              key={employee.id}
              onClick={handleTrClick}
            >
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
