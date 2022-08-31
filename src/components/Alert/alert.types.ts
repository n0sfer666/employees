import React from 'react'

export interface IAlertProps {
  title: string
  text: string | React.ReactNode
  isShow: boolean
  onClose: Function
}
