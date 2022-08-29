import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../components/nav-bar/nav-bar'
import PageIndex from '../pages'
import Page404 from '../pages/404'
import PageEmployeeAdd from '../pages/employee/add'
import PageEmployeeEdit from '../pages/employee/edit'
import PageEmployee from '../pages/employee/employee'

function Router (): JSX.Element {
  return (
    <BrowserRouter>
      <header className='p-3'><NavBar /></header>

      <Routes>
        <Route index element={<PageIndex />} />
        <Route path='*' element={<Page404 />} />

        <Route path='employee-add' element={<PageEmployeeAdd />}>
          <Route path='*' element={<Page404 />} />
        </Route>

        <Route path='employee-edit' element={<PageEmployeeEdit />}>
          <Route index element={<p>Сотрудник не выбран</p>} />
          <Route path=':id' element={<PageEmployee />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
