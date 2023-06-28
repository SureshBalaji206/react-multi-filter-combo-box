import {
  comboBoxDataProviderType,
  comboBoxSelectedItemsType,
} from './types/combobox'

export const getSelectedItemsPlaceHolder = (
  selectedItems: comboBoxSelectedItemsType[]
) => {
  return selectedItems
    .map((selectedItem) => selectedItem.label)
    .join(', ')
    .toString()
}

const sortAlphabetically = (
  element1: comboBoxDataProviderType,
  element2: comboBoxDataProviderType
) => {
  const element1Label = element1.label
  const element2Label = element2.label

  if (element1Label < element2Label) {
    return -1
  } else if (element1Label > element2Label) {
    return 1
  } else {
    return 0
  }
}

const findIsSelected = (
  selectedValues: comboBoxSelectedItemsType[],
  item: comboBoxDataProviderType
) => {
  return Boolean(
    selectedValues.find((selectedValue) => {
      return selectedValue.value === item.value
    })
  )
}

export const generateOptions = (
  dataProvider: comboBoxDataProviderType[],
  selectedValues: comboBoxSelectedItemsType[]
) => {
  if (dataProvider) {
    const sortedArray = dataProvider.sort((element1, element2) => {
      return sortAlphabetically(element1, element2)
    })

    return sortedArray.map((item) => {
      return {
        label: item.label,
        value: item.value,
        isDisabled: item.isDisabled,
        isSelected: findIsSelected(selectedValues, item),
      }
    })
  } else {
    return dataProvider
  }
}

export const performStateChange = (
  dataProvider: comboBoxSelectedItemsType[],
  identifier: string
) => {
  return dataProvider.map((option) => {
    if (option.value === identifier) {
      return { ...option, isSelected: !option.isSelected }
    } else {
      return { ...option }
    }
  })
}

export const performOnlyChange = (
  dataProvider: comboBoxSelectedItemsType[],
  identifier: string
) => {
  return dataProvider.map((option) => {
    if (option.value === identifier) {
      return { ...option, isSelected: true }
    } else {
      return { ...option, isSelected: false }
    }
  })
}

export const performSelectAllChange = (
  dataProvider: comboBoxSelectedItemsType[],
  stateToSelect: boolean
) => {
  return dataProvider.map((option) => {
    return {
      ...option,
      isSelected: option.isDisabled ? false : stateToSelect,
    }
  })
}
