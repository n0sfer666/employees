import { ERoles, IEmployee } from '../types/employee.types'

function getDateFromString (stringAsDate: string): Date {
  const splitDate = stringAsDate.split('.').map((val) => Number(val))
  return new Date(splitDate[2], splitDate[1] - 1, splitDate[0])
}
function getStringFromDate (date: Date): string {
  const year = date.getFullYear().toString()
  const month = date.getMonth().toString()
  const day = date.getDay().toString()
  return `${day.length === 1 ? '0' + day : day}.${month.length === 1 ? '0' + month : month}.${year}`
}

function isRole (stringToCheck: string): boolean {
  return stringToCheck in ERoles
}

function getNewEmployeeID (employeesData: IEmployee[]): string {
  return (employeesData[employeesData.length - 1].id + 1).toString()
}

export { getDateFromString, getStringFromDate, isRole, getNewEmployeeID }
