import { TEmployeeTitle } from '../../types/employee.types'
import { ISortProps } from '../sort/sort.types'

export interface ITableHeadProps {
  titles: TEmployeeTitle[]
  sortProps: ISortProps
}
