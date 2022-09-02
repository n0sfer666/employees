import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { defaultRoles, defaultRolesRu, defaultTitles, defaultTitlesRu } from '../../utils/employee-handlers'
import { ICardProps } from './card.types'

function Card (props: ICardProps): JSX.Element {
  const navigate = useNavigate()
  const handleButtonClick = useCallback(() => {
    navigate(`/employee-edit/${props.id}`)
  }, [props.id])
  return (
    <button
      className='btn btn-outline-primary'
      onClick={handleButtonClick}
    >
      <div className='Card d-flex flex-column'>
      {
        Object.keys(props).map((key, index) => (
          <p key={key} className={
            `m-0 p-0 ${index % 2 === 0 ? 'bg-warning' : ''}`
          }>
            <strong className='float-start'>{defaultTitlesRu[defaultTitles.indexOf(key)]}: </strong>
            <span className='float-end'>{
              (typeof (props[key]) === 'boolean' && props[key] === true)
                ? '✔'
                : key === 'role'
                  ? defaultRolesRu[defaultRoles.indexOf(props[key])]
                  : props[key]
            }</span>
          </p>
        ))
      }
    </div>
    </button>
  )
}

export default React.memo(Card)
