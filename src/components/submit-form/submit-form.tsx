import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { TRootState } from '../../store/store.types'
import { IEmployee, TRoles } from '../../types/employee.types'
import Alert from '../Alert/alert'
import { IAlertProps } from '../Alert/alert.types'
import Checkbox from '../checkbox/checkbox'
import TextFieldMasked from '../text-field-masked/text-field-masked'
import TextField from '../text-field/text-field'

const initAlertProps: IAlertProps = {
  isShow: false,
  onClose: () => {},
  title: '',
  text: ''
}
const initEmployeeData: IEmployee[] = [{
  id: -1,
  name: '',
  isArchive: false,
  role: 'cook',
  phone: '',
  birthday: ''
}]
const defaultRoles: TRoles[] = ['cook', 'driver', 'waiter']
const defaultRolesRu: string[] = ['Повар', 'Водитель', 'Официант']

function SubmitForm (): JSX.Element {
  const [alert, setAlert] = useState({
    ...initAlertProps,
    onClose: () => { setAlert({ ...alert, isShow: false }) }
  })
  const { id } = useParams()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isAdd = pathname === '/employee-add'
  const newEmployeeId = useSelector((state: TRootState) => state.employees.newEmployeeID)
  const editedEmployee = useSelector((state: TRootState) => state.employees.list.filter(
    (employee) => employee.id === Number(id)
  ))
  const isError = !isAdd && editedEmployee.length === 0
  const [employee] = isAdd ? initEmployeeData : editedEmployee
  useEffect(() => {
    if (isError) {
      setAlert({
        ...alert,
        isShow: true,
        title: 'Неправильный ID',
        text: 'Через 10 сек, вы будете перенаправлены... или нажмите =>'
      })
      setTimeout(() => {
        navigate('/')
      }, 10000)
      console.error('Wrong ID in location pathname')
    }
  }, [editedEmployee.length])
  return (isError
    ? <Alert {...alert} />
    : <form>
        <label key='id' className='input-group'>
          <h4 className='input-group-text'>ID:</h4>
          <input
          className="form-control"
          type="text"
          value={isAdd ? newEmployeeId : id}
          disabled
          readOnly
        />
        </label>
        <TextField
          key='name'
          label='Имя Фамилия'
          onChange={(val: string) => console.log(val)}
          placeholder='Введите имя...'
          value={employee.name}
        />
        <Checkbox
          key='isArchive'
          label='В архиве?'
          isChecked
          onChange={() => {}}
        />
        <label key='role' className='input-group'>
          <h4 className='input-group-text'>Role:</h4>
          <select className='form-select'>
            {(isAdd) && (<option value='' selected>Выберите профессию...</option>)}
            {
              defaultRoles.map((role, index) => (
                <option key={role} value={role} selected={role === employee.role}>{defaultRolesRu[index]}</option>
              ))
            }
          </select>
        </label>
        <TextFieldMasked
          key='phone'
          label='Телефон'
          mask='phone'
          onChange={() => {}}
          value={employee.phone}
        />
        <TextFieldMasked
          key='birthday'
          label='День Рождения'
          mask='birthday'
          onChange={() => {}}
          value={employee.birthday}
        />
        <button
          type='submit'
          className='btn btn-primary'
          onClick={() => {}}
        >{isAdd ? 'Добавить' : 'Редактировать'}</button>
      </form>
  )
}

export default React.memo(SubmitForm)
