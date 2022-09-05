import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { TRootState } from '../store/store.types'

function Page404 (): JSX.Element {
  const locationHome = useSelector((state: TRootState) => state.locations.home)
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate(locationHome)
    }, 2000)
  }, [])
  return (
    <h1 className='h1 text-center text-red-800'> Такой страницы нет... и не будет</h1>
  )
}

export default Page404
