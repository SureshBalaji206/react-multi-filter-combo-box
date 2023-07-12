import React, { useCallback, useMemo, useState, useRef } from 'react'
import {
  RootContainer,
  DisplayContainer,
  IconContainer,
  ShowSelectedItemsContainer,
} from './index.styled'
import { getSelectedItemsPlaceHolder } from '../../helpers'
import { useClickOutside } from '../../hooks/useClickOutside'
import DownArraycon from '../../Icons/DownArrow'
import { comboBoxType } from '../../types/combobox'
import Popover from '../Popover'

export default function ComboBox({
  cancelText,
  dataProvider,
  leftAdornment,
  onComplete = () => null,
  placeHolder,
  rightAdornment,
  selectAllText,
  submitText,
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
    onComplete,
    selectAllText,
    submitText,
    value,
  ])

  return (
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
  )
}
