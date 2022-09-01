import { TSortAction, TSortTypes } from '../../store/store.types'

export type TSortState = [{[key: string]: TSortAction}]
export interface ISortProps {
  sortState: TSortState
  onSort: (type: TSortTypes, action: TSortAction) => void
}
