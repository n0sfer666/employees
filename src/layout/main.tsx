import React from 'react'
import { ILayoutMainProps } from './layout.types'

function LayoutMain ({ children, header, isCentred }: ILayoutMainProps): JSX.Element {
  return (
    <main className='container-fluid'>
      <header>
        {
          typeof (header) === 'string'
            ? (<h1 className='h1 text-center'>{header}</h1>)
            : (header)}
      </header>
      <div className={
        (isCentred !== undefined && isCentred)
          ? 'w-100 d-flex flex-column align-items-center'
          : ''
      }>
        {children}
      </div>
    </main>
  )
}

export default LayoutMain
