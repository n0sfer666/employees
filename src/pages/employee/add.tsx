import React from 'react'
import SubmitForm from '../../components/submit-form/submit-form'
import LayoutMain from '../../layout/main'

function PageEmployeeAdd (): JSX.Element {
  return (
    <LayoutMain header='Добавление сотрудника'>
      <SubmitForm />
    </LayoutMain>
  )
}

export default PageEmployeeAdd
