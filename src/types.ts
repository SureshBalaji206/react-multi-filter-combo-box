import { RefObject, ReactNode } from 'react'

export interface ShowSelectedItemsContainerType {
  hasLeftAdornment: boolean
}

export interface comboBoxDataProviderType {
  isDisabled?: boolean
  isSelected?: boolean
  label: string
  value: string | number
}

export interface comboBoxSelectedItemsType {
  isDisabled?: boolean
  isSelected: boolean
  label: string
  value: string | number
}

export interface comboBoxType {
  backgroundColor?: string
  cancelText?: string
  dataProvider: comboBoxDataProviderType[]
  leftAdornment?: ReactNode
  onComplete?: (value: comboBoxSelectedItemsType[]) => void
  placeHolder?: string
  primaryColor?: string
  rightAdornment?: ReactNode
  selectAllText?: string
  submitText?: string
  value?: comboBoxSelectedItemsType[]
  textColor?: string
}

export interface popoverType {
  cancelText?: string
  closePopover: () => void
  dataProvider: comboBoxDataProviderType[]
  onComplete: (value: comboBoxSelectedItemsType[]) => void
  popoverRef: RefObject<HTMLDivElement>
  primaryColor?: string
  selectAllText?: string
  submitText?: string
  value: comboBoxSelectedItemsType[]
}

export interface CustomButtonPropsType {
  clickHandler: () => void
  text: string
}

interface ColorsPropsType {
  backgroundColor: string
  primaryColor: string
  textColor: string
}

interface StylesPropType {
  borderStyle: string
  containerHeight: string
  containerPadding: string
  containerWidth: string
  fontStyle: string
}

interface ThemePropsType {
  colors: ColorsPropsType
  styles: StylesPropType
}

export interface ThemeProviderPropsType {
  theme?: ThemePropsType
  hasLeftAdornment?: boolean
}

export interface CustomInputPropsType {
  className?: string
  changeHandler: (value: string) => void
  placeHolder: string
  value: string
}

export interface IconProps {
  fill?: string
  height?: number | string
  width?: number | string
}
