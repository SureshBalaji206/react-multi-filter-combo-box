import { RefObject } from 'react'
import { ComboBoxDataProviderType, ComboBoxSelectedItemsType } from './combobox'

export interface popoverType {
  cancelText?: string
  closePopover: () => void
  dataProvider: ComboBoxDataProviderType[]
  isSingleSelect: boolean
  onComplete: (value: ComboBoxSelectedItemsType[]) => void
  options: ComboBoxSelectedItemsType[]
  popoverRef: RefObject<HTMLDivElement>
  primaryColor?: string
  selectAllText?: string
  submitText?: string
  value: ComboBoxSelectedItemsType[]
}
