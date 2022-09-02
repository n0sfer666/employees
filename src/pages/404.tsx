import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Page404 (): JSX.Element {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 2000)
  }, [])
  return (
    <h1 className='h1 text-center text-red-800'> Такой страницы нет... и не будет</h1>
  )
}

export default Page404
