export type TButtonNavigateTypes = 'back' | 'home' | 'forward'
export interface IButtonNavigateProps {
  type: TButtonNavigateTypes
}
export interface IButtonNavigateData extends IButtonNavigateProps {
  title: '⌂' | '🠔' | '🠖'
}
