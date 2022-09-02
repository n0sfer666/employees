import { IEmployee } from '../../types/employee.types'
import { IFilterProps } from '../filter/filter.types'
import { ISortProps } from '../sort/sort.types'

export interface ITableEmployeesProps {
  employees: IEmployee[]
  sortProps: ISortProps
  filterProps: IFilterProps
}
