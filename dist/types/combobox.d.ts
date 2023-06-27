import { ReactNode } from 'react';
export interface ShowSelectedItemsContainerType {
    hasLeftAdornment: boolean;
}
export interface comboBoxDataProviderType {
    isDisabled?: boolean;
    isSelected?: boolean;
    label: string;
    value: string;
}
export interface comboBoxSelectedItemsType {
    isDisabled?: boolean;
    isSelected: boolean;
    label: string;
    value: string;
}
export interface comboBoxType {
    cancelText?: string;
    dataProvider: comboBoxDataProviderType[];
    leftAdornment?: ReactNode;
    onComplete?: (value: comboBoxSelectedItemsType[]) => void;
    placeHolder?: string;
    primaryColor?: string;
    rightAdornment?: ReactNode;
    selectAllText?: string;
    submitText?: string;
    value?: comboBoxSelectedItemsType[];
}
