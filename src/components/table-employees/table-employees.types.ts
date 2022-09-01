import { IEmployee } from '../../types/employee.types'
import { ISortProps } from '../sort/sort.types'

export interface ITableEmployeesProps {
  employees: IEmployee[]
  sortProps: ISortProps
}
