import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ButtonNavigate from '../button-navigate/button-navigate'

function NavBar (): JSX.Element {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  return (
    <nav className='Nav-bar bg-light d-flex flex-wrap justify-content-around align-items-center p-2'>
      <ul className='Nav-bar__navigate d-flex justify-content-between align-items-center ml-3'>
        <li key='home'>
          <ButtonNavigate type='home' />
        </li>
        <li key='back'>
          <ButtonNavigate type='back' />
        </li>
        <li key='forward'>
          <ButtonNavigate type='forward' />
        </li>
      </ul>
      {
          (pathname !== '/employee-add') && (
            <button
              type='button'
              className='Nav-bar__button-employee-add btn btn-success rounded-pill'
              onClick={() => { navigate('/employee-add') }}
            >
              Добавить сотрудника
            </button>
          )
        }
    </nav>
  )
}

export default NavBar
