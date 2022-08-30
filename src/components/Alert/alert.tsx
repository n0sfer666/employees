import React from 'react'
import { IAlertProps } from './alert.types'

function Alert ({ text, title, isShow, onClose }: IAlertProps): JSX.Element | null {
  const handleButtonClick = (): void => { onClose() }
  setTimeout(() => {
    if (isShow) handleButtonClick()
  }, 15000)
  return (
    isShow
      ? (<div className='alert alert-danger d-flex align-items-center justify-content-between' role='alert'>
          <div className='d-inline-block'>
            <span
              style={{ fontSize: '20px' }}
            >⚠ </span>
            <strong>{title}! </strong>
            <span>{text}</span>
          </div>
          <button type="button" onClick={handleButtonClick} className="btn-close"aria-label="Close"></button>
        </div>)
      : null
  )
}

export default React.memo(Alert)
