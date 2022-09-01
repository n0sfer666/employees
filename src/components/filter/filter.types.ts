import { IEmployee, TRoles } from '../../types/employee.types'

export type TFilterState = Partial<Pick<IEmployee, 'role' | 'isArchive'>>
export interface IFilterProps {
  filterState: TFilterState
  onFilter: (key?: keyof TFilterState, value?: TRoles | boolean) => void
}
