import _ from 'lodash'
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { addEmployee, editEmployee } from '../../store/slices/employees-data'
import { TRootState } from '../../store/store.types'
import { TEmployeeStringTitle, TRoles } from '../../types/employee.types'
import { defaultRoles, defaultRolesRu, defaultStringFields, defaultStringFieldsRu, defaultWrongFields, initAlertProps, initEmployeeData, isDateAsStringCorrect, isRole } from '../../utils/employee-handlers'
import Alert from '../alert/alert'
import Checkbox from '../checkbox/checkbox'
import TextFieldMasked from '../text-field-masked/text-field-masked'
import TextField from '../text-field/text-field'

function SubmitForm (): JSX.Element {
  const locations = useSelector((state: TRootState) => state.locations)
  const dispatch = useDispatch()
  const { id } = useParams()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isAdd = pathname.slice(1) === locations.add
  const [alert, setAlert] = useState({
    ...initAlertProps,
    onClose: () => { setAlert({ ...alert, isShow: false }) }
  })
  const [newEmployeeData, setNewEmployeeData] = useState(initEmployeeData)
  const [wrongFields, setWrongFields] = useState(defaultWrongFields)

  const newEmployeeId = useSelector((state: TRootState) => state.employees.newEmployeeID)
  const editedEmployee = useSelector((state: TRootState) => state.employees.list.filter(
    (employee) => employee.id === Number(id)
  ))
  const isError = !isAdd && editedEmployee.length === 0
  const [employee] = isAdd ? [initEmployeeData] : editedEmployee
  useEffect(() => {
    if (isError) {
      setAlert({
        ...alert,
        isShow: true,
        title: 'Неправильный ID',
        text: 'Через 10 сек, вы будете перенаправлены... или нажмите =>',
        onClose: () => {
          setAlert({ ...alert, isShow: false })
          navigate(locations.home)
        }
      })
      setTimeout(() => {
        navigate(locations.home)
      }, 10000)
      console.error('Wrong ID in location pathname')
    } else if (!isAdd) {
      setNewEmployeeData({ ...employee })
    } else {
      setNewEmployeeData({ ...newEmployeeData, id: newEmployeeId })
    }
  }, [editedEmployee.length])

  useEffect(() => {
    if (newEmployeeData.id !== -1) setNewEmployeeData({ ...initEmployeeData, id: newEmployeeId })
  }, [newEmployeeId])

  const callback = {
    onChangeTextField: useCallback((field: TEmployeeStringTitle, value: string) => {
      setNewEmployeeData({ ...newEmployeeData, [field]: value })
    }, [newEmployeeData]),
    onChangeRole: useCallback((event: ChangeEvent<HTMLSelectElement>) => {
      event.stopPropagation()
      const role = event.target.value
      if (isRole(role)) {
        setNewEmployeeData({ ...newEmployeeData, role: role as TRoles })
      }
    }, [newEmployeeData]),
    onChangeCheckbox: useCallback(() => {
      setNewEmployeeData({ ...newEmployeeData, isArchive: !newEmployeeData.isArchive })
    }, [newEmployeeData]),
    onSubmit: () => {
      const { name, phone, birthday, role } = newEmployeeData
      setWrongFields(defaultWrongFields)
      setAlert({ ...alert, text: '' })
      const wrongs: TEmployeeStringTitle[] = []
      const isNameCorrect = name.split(' ').length === 2
      const isPhoneCorrect = phone.search('_') < 0
      const isBirthdayCorrect = isDateAsStringCorrect(birthday)
      if (!isNameCorrect) wrongs.push('name')
      if (!isPhoneCorrect) wrongs.push('phone')
      if (!isBirthdayCorrect) wrongs.push('birthday')
      if (!isRole(role)) wrongs.push('role')
      if (!isAdd && _.isEqual(newEmployeeData, employee)) {
        setAlert({
          ...alert,
          isShow: true,
          type: 'warning',
          title: 'Данные не изменились.',
          text: 'Возможно, вам стоит отдохнуть 😉'
        })
      } else if (wrongs.length === 0) {
        dispatch(
          isAdd
            ? addEmployee(newEmployeeData)
            : editEmployee(newEmployeeData)
        )
        setAlert({
          ...alert,
          type: 'success',
          title: (
            'Сотрудник ' +
            newEmployeeData.name +
            (isAdd ? ' добавлен.' : ' отредактирован.')
          ),
          text: <Link to={locations.home}>Вернуться к списку сотрудников</Link>,
          isShow: true
        })
      } else {
        setWrongFields(wrongs)
        const wrongFieldsIndexes = wrongs.map(
          (field) => defaultStringFields.indexOf(field)
        )
        const wrongFieldsRu = wrongFieldsIndexes.map(
          (index) => (defaultStringFieldsRu[index] + ', ')
        )
        setAlert({
          ...alert,
          type: 'danger',
          title: (wrongs.length === 1
            ? 'Неправильно заполнена форма:'
            : 'Неправильно заполнены формы:'),
          text: `${wrongFieldsRu.reduce((prev, next) => prev + next).slice(0, -2)}`,
          isShow: true
        })
      }
    }
  }
  return (isError
    ? <Alert {...alert} />
    : <>
        <Alert {...alert} />
        <div className={
          `Submit-form flex-fill m-3 p-3 border rounded ${isAdd ? 'border-warning' : 'border-info'}`
        }>
          <div key='id' className='w-100 mb-2 rounded'>
            <label className='w-100'>
              <h6 className='input-label'>ID:</h6>
              <input
              className="form-control"
              type="text"
              value={isAdd ? newEmployeeId : id}
              disabled
              readOnly
            />
            </label>
          </div>
          <div
            key='name'
            className={
              `w-100 mb-2 rounded ${wrongFields.includes('name') ? 'Wrong-field' : ''}`
            }
          >
            <TextField
              field='name'
              label={defaultStringFieldsRu[defaultStringFields.indexOf('name')]}
              onChange={callback.onChangeTextField}
              placeholder={isAdd ? 'Александр(а) Александров(а)' : employee.name}
              value={newEmployeeData.name}
            />
          </div>
          <div key='role' className='w-100 mb-2 rounded'>
            <label className='w-100'>
              <h6 className='input-label'>Должность:</h6>
              <select className='form-select' onChange={callback.onChangeRole}>
                {
                  (isAdd) && (
                    <option
                      value=''
                      selected={newEmployeeData.role === ''}
                    >
                      Выберите профессию...
                    </option>
                  )
                } {
                  defaultRoles.map((role, index) => (
                    <option
                      key={role}
                      value={role}
                      selected={ role === employee.role}
                    >
                      {defaultRolesRu[index]}
                    </option>
                  ))
                }
              </select>
            </label>
          </div>
          <div
            key='phone'
            className={
              `w-100 mb-2 rounded ${wrongFields.includes('phone') ? 'Wrong-field' : ''}`
            }
          >
            <TextFieldMasked
              field='phone'
              label={defaultStringFieldsRu[defaultStringFields.indexOf('phone')]}
              mask='phone'
              onChange={callback.onChangeTextField}
              value={newEmployeeData.phone}
            />
          </div>
          <div
            key='birthday'
            className={
              `w-100 mb-2 rounded ${wrongFields.includes('birthday') ? 'Wrong-field' : ''}`
            }
          >
            <TextFieldMasked
              field='birthday'
              label={defaultStringFieldsRu[defaultStringFields.indexOf('birthday')]}
              mask='birthday'
              onChange={callback.onChangeTextField}
              value={newEmployeeData.birthday}
            />
          </div>
          <div key='isArchive' className='w-100 mb-2 rounded'>
            <Checkbox
              label='В архиве?'
              isChecked={newEmployeeData.isArchive}
              onChange={callback.onChangeCheckbox}
            />
          </div>
          <div
            key='action-button'
            className='d-flex justify-content-center'
          >
            <button
              type='button'
              className='w-50 mt-3 btn btn-primary'
              onClick={callback.onSubmit}
            >
              {isAdd ? 'Добавить' : 'Редактировать'}
            </button>
          </div>
      </div>
    </>
  )
}

export default React.memo(SubmitForm)
