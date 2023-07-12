import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ComboBox from '../components/ComboBox'
import { defaultStyles } from '../constants'
import AppThemeProvider from '../context/ThemeContext'
import { ComboBoxSelectedItemsType, ComboBoxType } from '../types/combobox'

const dataProvider = [
  {
    label: 'Cricket',
    value: '1',
  },
  {
    label: 'Athletics',
    value: '2',
  },
  {
    label: 'Hill Climbing',
    value: '3',
  },
  {
    label: 'Swimming',
    value: '4',
  },
  {
    label: 'Ice Hockey',
    value: '5',
  },
  {
    label: 'Squash',
    value: '6',
  },
  {
    label: 'Tennis',
    value: '7',
  },
  {
    label: 'Rugby',
    value: '8',
  },
  {
    label: 'Baseball',
    value: '9',
  },
  {
    label: 'Badminton',
    value: '10',
  },
  {
    label: 'Volleyball',
    value: '11',
  },
  {
    label: 'Surfing',
    value: '12',
  },
  {
    label: 'Golf',
    value: '13',
  },
  {
    label: 'Basketball',
    value: '14',
  },
  {
    label: 'Football',
    value: '15',
  },
  {
    label: 'Hockey',
    value: '16',
  },
  {
    label: 'High Jump',
    value: '17',
  },
  {
    label: 'Sky Diving',
    value: '18',
  },
]

export const SimpleComboBox = ({
  backgroundColor,
  cancelText,
  placeHolder,
  primaryColor,
  selectAllText,
  submitText,
  textColor,
}: ComboBoxType) => {
  const [value, setValue] = useState<ComboBoxSelectedItemsType[]>([])

  return (
    <AppThemeProvider
      backgroundColor={backgroundColor ? backgroundColor : defaultStyles.backgroundColor}
      borderStyle={defaultStyles.borderStyle}
      containerHeight={defaultStyles.containerHeight}
      containerPadding={defaultStyles.containerPadding}
      containerWidth={defaultStyles.containerWidth}
      fontStyle={defaultStyles.fontStyle}
      primaryColor={primaryColor ? primaryColor : defaultStyles.primaryColor}
      textColor={textColor ? textColor : defaultStyles.textColor}
    >
      <ComboBox
        cancelText={cancelText}
        dataProvider={dataProvider}
        leftAdornment={null}
        onComplete={(value: ComboBoxSelectedItemsType[]) => setValue(value)}
        placeHolder={placeHolder}
        rightAdornment={null}
        selectAllText={selectAllText}
        submitText={submitText}
        value={value}
      />
    </AppThemeProvider>
  )
}

SimpleComboBox.propTypes = {
  backgroundColor: PropTypes.string,
  cancelText: PropTypes.string,
  placeHolder: PropTypes.string,
  primaryColor: PropTypes.string,
  selectAllText: PropTypes.string,
  submitText: PropTypes.string,
  textColor: PropTypes.string,
}

SimpleComboBox.defaultProps = {
  backgroundColor: '',
  cancelText: '',
  placeHolder: '',
  primaryColor: '',
  selectAllText: '',
  submitText: '',
  textColor: '',
}
