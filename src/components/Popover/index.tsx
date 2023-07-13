import React, { useEffect, useState } from 'react'
import MultiSelect from './MultiSelect'
import SingleSelect from './SingleSelect'
import { generateOptions } from '../../helpers'
import { popoverType } from '../../types/popover'

export default function Popover({
  cancelText,
  closePopover,
  dataProvider,
  isSingleSelect,
  onComplete,
  popoverRef,
  primaryColor,
  selectAllText,
  submitText,
  value,
}: popoverType) {
  const [options, setOptions] = useState<any>([])

  useEffect(() => {
    const data = generateOptions(dataProvider, value)

    setOptions(data)
  }, [dataProvider, value])

  if (isSingleSelect) {
    return (
      <SingleSelect
        closePopover={closePopover}
        onComplete={onComplete}
        options={options}
        popoverRef={popoverRef}
        value={value}
      />
    )
  }

  return (
    <MultiSelect
      cancelText={cancelText}
      closePopover={closePopover}
      onComplete={onComplete}
      options={options}
      popoverRef={popoverRef}
      primaryColor={primaryColor}
      selectAllText={selectAllText}
      submitText={submitText}
      value={value}
    />
  )
}
