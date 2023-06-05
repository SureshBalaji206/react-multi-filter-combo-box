import { ReactNode } from 'react';

export interface localeStringType {
  cancel?: string;
  only?: string;
  placeHolder?: string;
  selectAll?: string;
  submit?: string;
}
export interface ShowSelectedItemsContainerType {
  hasLeftAdornment: boolean;
}

export interface comboBoxDataProviderType {
  label: string;
  value: string;
  isSelected?: boolean;
}

export interface comboBoxSelectedItemsType {
  isSelected: boolean;
  label: string;
  value: string;
}

export interface comboBoxType {
  dataProvider: comboBoxDataProviderType[];
  leftAdornment?: ReactNode;
  locale?: localeStringType;
  onComplete: (value: comboBoxSelectedItemsType[]) => void;
  rightAdornment?: ReactNode;
  value: comboBoxSelectedItemsType[];
}
