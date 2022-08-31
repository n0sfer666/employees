import React from 'react'

export interface IAlertProps {
  type: 'danger' | 'success' | 'warning'
  title: string
  text: string | React.ReactNode
  isShow: boolean
  onClose: Function
}
