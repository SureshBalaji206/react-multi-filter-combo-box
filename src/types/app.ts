import { ReactNode } from 'react'
import { ComboBoxDataProviderType, ComboBoxSelectedItemsType } from '../types/combobox'

export interface AppPropType {
  backgroundColor?: string
  cancelText?: string
  dataProvider: ComboBoxDataProviderType[]
  isSingleSelect?: boolean
  leftAdornment?: ReactNode
  onComplete?: (value: ComboBoxSelectedItemsType[]) => void
  placeHolder?: string
  primaryColor?: string
  rightAdornment?: ReactNode
  selectAllText?: string
  submitText?: string
  value?: ComboBoxSelectedItemsType[]
  textColor?: string
}
