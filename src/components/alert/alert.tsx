import React from 'react'
import { IAlertProps } from './alert.types'

function Alert ({ type, text, title, isShow, onClose }: IAlertProps): JSX.Element | null {
  const handleButtonClick = (): void => { onClose() }
  setTimeout(() => {
    if (isShow) handleButtonClick()
  }, 15000)
  return (
    isShow
      ? (<div
          className={
            `w-100 alert alert-${type} d-flex align-items-center justify-content-between`
          }
          role='alert'
        >
          <div className='d-flex flex-column'>
            <p className='m-0'>
              <strong>
                {
                  `${type === 'danger' ? '⚠ ' : ''}${title}`
                }
            </strong>
            </p>
            <p className='m-0'>{text}</p>
          </div>
          <button type="button" onClick={handleButtonClick} className="btn-close"aria-label="Close"></button>
        </div>)
      : null
  )
}

export default React.memo(Alert)
