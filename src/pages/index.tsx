import React from 'react'
import { Link } from 'react-router-dom'
import LayoutMain from '../layout/main'

function PageIndex (): JSX.Element {
  return (
    <LayoutMain
      header={'Home Page'}
    >
      <nav>
        <Link to={'/employee-add'}>Employee ADD</Link>
        {' '}
        <Link to={'/employee-edit'}>Employee EDIT</Link>
      </nav>
      <p>content</p>
    </LayoutMain>
  )
}

export default PageIndex
