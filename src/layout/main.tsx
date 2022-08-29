import React from 'react'
import { ILayoutMainProps } from './layout.types'

function LayoutMain ({ children, header }: ILayoutMainProps): JSX.Element {
  return (
    <main className='container-fluid'>
      <header>
        {typeof (header) === 'string' ? (<h1 className='h1 text-center'>{header}</h1>) : (header)}
      </header>
      <div>
        {children}
      </div>
    </main>
  )
}

export default LayoutMain
