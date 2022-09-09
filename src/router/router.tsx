import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../components/nav-bar/nav-bar'
import PageIndex from '../pages'
import Page404 from '../pages/404'
import PageEmployeeAdd from '../pages/employee/add'
import PageEmployeeEdit from '../pages/employee/edit'
import PageEmployee from '../pages/employee/employee'
import { TRootState } from '../store/store.types'
import { defaultLocations } from '../utils/employee-handlers'

function Router (): JSX.Element {
  const locations = useSelector((state: TRootState) => state.locations)
  const isDeployed = locations.home !== defaultLocations.home
  return (
    <BrowserRouter>
      <header className='p-3'><NavBar /></header>

      <Routes>
        <Route path='/'>
          {
            isDeployed
              ? <Route path={locations.home} element={<PageIndex />} />
              : <Route index element={<PageIndex />} />
          }
          <Route path='*' element={<Page404 />} />

          <Route path={locations.add} element={<PageEmployeeAdd />}>
            <Route path='*' element={<Page404 />} />
          </Route>

          <Route path={locations.edit} element={<PageEmployeeEdit />}>
            <Route index element={<p>Сотрудник не выбран</p>} />
            <Route path=':id' element={<PageEmployee />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
