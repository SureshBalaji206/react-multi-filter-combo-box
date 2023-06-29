import React, { ReactNode } from 'react'
import ComboBox from './components/ComboBox'
import { defaultLocale, defaultStyles } from './constants'
import AppThemeProvider from './context/ThemeContext'
import { comboBoxDataProviderType, comboBoxSelectedItemsType } from './types'

interface AppPropType {
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

export default function App({
  backgroundColor = defaultStyles.backgroundColor,
  cancelText = defaultLocale.cancel,
  dataProvider = [],
  leftAdornment = null,
  onComplete = () => null,
  placeHolder = defaultLocale.placeHolder,
  primaryColor = defaultStyles.primaryColor,
  rightAdornment = null,
  selectAllText = defaultLocale.selectAll,
  submitText = defaultLocale.submit,
  textColor = defaultStyles.textColor,
  value = [],
}: AppPropType) {
  return (
    <AppThemeProvider
      backgroundColor={backgroundColor}
      borderStyle={defaultStyles.borderStyle}
      containerHeight={defaultStyles.containerHeight}
      containerPadding={defaultStyles.containerPadding}
      containerWidth={defaultStyles.containerWidth}
      fontStyle={defaultStyles.fontStyle}
      primaryColor={primaryColor}
      textColor={textColor}
    >
      <ComboBox
        cancelText={cancelText}
        dataProvider={dataProvider}
        leftAdornment={leftAdornment}
        onComplete={onComplete}
        placeHolder={placeHolder}
        rightAdornment={rightAdornment}
        selectAllText={selectAllText}
        submitText={submitText}
        value={value}
      />
    </AppThemeProvider>
  )
}
