import { IAlertProps } from '../components/alert/alert.types'
import { TSortTypes } from '../store/store.types'
import { ERoles, IEmployee, TEmployeeStringTitle, TRoles } from '../types/employee.types'

function getDateFromString (stringAsDate: string): Date {
  const splitDate = stringAsDate.split('.').map((val) => Number(val))
  return new Date(splitDate[2], splitDate[1] - 1, splitDate[0])
}
function getStringFromDate (date: Date): string {
  const year = date.getFullYear().toString()
  const month = (date.getMonth() + 1).toString()
  const day = date.getDate().toString()
  return `${day.length === 1 ? '0' + day : day}.${month.length === 1 ? '0' + month : month}.${year}`
}

function isDateAsStringCorrect (date: string): boolean {
  return getStringFromDate(getDateFromString(date)) === date
}

function isRole (stringToCheck: string): boolean {
  return stringToCheck in ERoles
}

function getNewEmployeeID (employeesData: IEmployee[]): string {
  return (employeesData[employeesData.length - 1].id + 1).toString()
}

const defaultTitles = ['id', 'name', 'isArchive', 'role', 'phone', 'birthday']
const defaultTitlesRu = ['ИД', 'Имя Фамилия', 'В архиве?', 'Должность', 'Телефон', 'Дата рождения']
const initAlertProps: IAlertProps = {
  type: 'danger',
  isShow: false,
  onClose: () => {},
  title: '',
  text: ''
}
const initEmployeeData: IEmployee = {
  id: -1,
  name: '',
  isArchive: false,
  role: '',
  phone: '',
  birthday: ''
}

const defaultLocations = {
  home: '/',
  add: 'employee-add',
  edit: 'employee-edit'
}

const defaultWrongFields: TEmployeeStringTitle[] = []
const defaultStringFields: TEmployeeStringTitle[] = ['name', 'role', 'phone', 'birthday']
const defaultStringFieldsRu: string[] = ['Имя Фамилия', 'Должность', 'Телефон', 'Дата Рождения']
const defaultRoles: TRoles[] = ['cook', 'driver', 'waiter']
const defaultRolesRu: string[] = ['Повар', 'Водитель', 'Официант']
const sortTypes: TSortTypes[] = ['id', 'name', 'birthday']
const sortTypesRu: string[] = ['ИД', 'Имя', 'Дата Рождения']

export {
  isDateAsStringCorrect,
  isRole,
  getNewEmployeeID,
  getDateFromString,
  defaultLocations,
  defaultTitles,
  defaultTitlesRu,
  defaultRoles,
  defaultRolesRu,
  defaultStringFields,
  defaultStringFieldsRu,
  defaultWrongFields,
  initAlertProps,
  initEmployeeData,
  sortTypes,
  sortTypesRu
}
