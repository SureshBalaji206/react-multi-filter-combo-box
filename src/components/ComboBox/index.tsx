import React, { useCallback, useMemo, useState, useRef } from 'react'
import { ThemeProvider } from '@emotion/react'
import Popover from '../Popover'
import DownArraycon from '../../Icons/DownArrow'

import { defaultLocale } from '../../constants'
import { comboBoxType } from '../../types/combobox'
import { getSelectedItemsPlaceHolder } from '../../helpers'
import { useClickOutside } from '../../hooks/useClickOutside'

import {
  RootContainer,
  DisplayContainer,
  IconContainer,
  ShowSelectedItemsContainer,
} from './index.styled'

export default function ComboBox({
  cancelText = defaultLocale.cancel,
  dataProvider = [],
  leftAdornment = null,
  onComplete = () => null,
  placeHolder = defaultLocale.placeHolder,
  primaryColor = 'unset',
  rightAdornment = null,
  selectAllText = defaultLocale.selectAll,
  submitText = defaultLocale.submit,
  value = [],
}: comboBoxType) {
  const popoverRef = useRef(null)
  const [toggle, setToggle] = useState<boolean>(false)
  const closePopover = useCallback(() => setToggle(false), [])

  useClickOutside(popoverRef, closePopover)

  const openPopover = () => {
    setToggle(true)
  }

  const renderLeftAdornment = useMemo(() => {
    return leftAdornment ? <IconContainer>{leftAdornment}</IconContainer> : null
  }, [leftAdornment])

  const renderPlaceHolder = useMemo(() => {
    return value.length ? getSelectedItemsPlaceHolder(value) : placeHolder
  }, [value, placeHolder])

  const renderRightAdornment = useMemo(() => {
    return rightAdornment ? (
      <IconContainer>{rightAdornment}</IconContainer>
    ) : (
      <IconContainer>
        <DownArraycon />
      </IconContainer>
    )
  }, [rightAdornment])

  const renderPopover = useMemo(() => {
    if (toggle) {
      return (
        <Popover
          cancelText={cancelText}
          closePopover={closePopover}
          dataProvider={dataProvider}
          onComplete={onComplete}
          popoverRef={popoverRef}
          primaryColor={primaryColor}
          selectAllText={selectAllText}
          submitText={submitText}
          value={value}
        />
      )
    }

    return <React.Fragment />
  }, [
    toggle,
    popoverRef,
    cancelText,
    closePopover,
    dataProvider,
    primaryColor,
    onComplete,
    selectAllText,
    submitText,
    value,
  ])

  const theme = useMemo(() => {
    return {
      colors: {
        primary: primaryColor,
      },
    }
  }, [primaryColor])

  return (
    <ThemeProvider theme={theme}>
      <RootContainer>
        <DisplayContainer onClick={openPopover}>
          {renderLeftAdornment}
          <ShowSelectedItemsContainer hasLeftAdornment={Boolean(leftAdornment)}>
            {renderPlaceHolder}
          </ShowSelectedItemsContainer>
          {renderRightAdornment}
        </DisplayContainer>
        {renderPopover}
      </RootContainer>
    </ThemeProvider>
  )
}
