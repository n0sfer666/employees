import React from 'react'
// import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
// import { TRootState } from '../../store/store.types'
// import { IEmployee } from '../../types/employee.types'

function PageEmployee (): JSX.Element {
  const params = useParams()
  // const employeeData: IEmployee[] = useSelector(
  //   (state: TRootState) => state.employees.list.filter(
  //     (employee) => employee.id === Number(employeeID)
  //   )
  // )
  // const [employee] = employeeData
  return (
    <>
    {Object.keys(params).map((key) => (
      <p key={key}>{key}: {params[key]}</p>
    ))}
    </>
  )
}

export default PageEmployee
