import { ReactNode } from 'react';

export interface comboxBoxDataProviderType {
  label: string;
  value: string;
  isSelected?: boolean;
}

export interface comboxBoxSelectedItemsType {
  isSelected: boolean;
  label: string;
  value: string;
}

export interface comboxBoxType {
  leftAdornment?: ReactNode;
  rightAdornment?: ReactNode;
  dataProvider: comboxBoxDataProviderType[];
  value: comboxBoxSelectedItemsType[];
  onComplete: (value: comboxBoxSelectedItemsType[]) => void;
}
