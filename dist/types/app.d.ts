import { ReactNode } from 'react';
import { comboBoxDataProviderType, comboBoxSelectedItemsType } from '../types/combobox';
export interface AppPropType {
    backgroundColor?: string;
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
    textColor?: string;
}
