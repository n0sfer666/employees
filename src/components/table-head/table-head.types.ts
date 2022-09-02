import { TEmployeeTitle } from '../../types/employee.types'
import { IFilterProps } from '../filter/filter.types'
import { ISortProps } from '../sort/sort.types'

export interface ITableHeadProps {
  titles: TEmployeeTitle[]
  sortProps: ISortProps
  filterProps: IFilterProps
}
