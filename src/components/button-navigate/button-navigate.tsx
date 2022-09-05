import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { TRootState } from '../../store/store.types'
import { IButtonNavigateData, IButtonNavigateProps } from './button-navigate.types'

const styles = {
  main: 'Button-navigate btn rounded-circle'
}
const data: IButtonNavigateData[] = [
  {
    type: 'back',
    title: '🠔'
  }, {
    type: 'home',
    title: '⌂'
  }, {
    type: 'forward',
    title: '🠖'
  }
]

function ButtonNavigate ({ type }: IButtonNavigateProps): JSX.Element {
  const navigate = useNavigate()
  const locationHome = useSelector((state: TRootState) => state.locations.home)
  const [params] = data.filter((item) => item.type === type)
  const { title } = params
  const className = styles.main + ' ' + (type === 'home' ? 'btn-primary' : 'btn-outline-primary')
  const onClick = type === 'back'
    ? (): void => { navigate(-1) }
    : type === 'forward'
      ? (): void => { navigate(1) }
      : (): void => { navigate(locationHome) }
  return (
    <button type='button' onClick={onClick} className={className}>
      <span className={type === 'home' ? 'is-home' : ''}>
        {title}
      </span>
    </button>
  )
}

export default ButtonNavigate
