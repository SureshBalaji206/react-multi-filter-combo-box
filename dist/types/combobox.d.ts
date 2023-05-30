import { ReactNode } from 'react';
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
    leftAdornment?: ReactNode;
    rightAdornment?: ReactNode;
    dataProvider: comboBoxDataProviderType[];
    value: comboBoxSelectedItemsType[];
    onComplete: (value: comboBoxSelectedItemsType[]) => void;
}
