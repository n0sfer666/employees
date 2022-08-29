import React from 'react'
import { Outlet } from 'react-router-dom'
import LayoutMain from '../../layout/main'

function PageEmployeeEdit (): JSX.Element {
  return (
    <LayoutMain header='Редактирование'>
      <Outlet />
    </LayoutMain>
  )
}

export default PageEmployeeEdit
