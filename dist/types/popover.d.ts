import { RefObject } from 'react';
import { comboBoxDataProviderType, comboBoxSelectedItemsType } from './combobox';
export interface popoverType {
    cancelText?: string;
    closePopover: () => void;
    dataProvider: comboBoxDataProviderType[];
    onComplete: (value: comboBoxSelectedItemsType[]) => void;
    popoverRef: RefObject<HTMLDivElement>;
    primaryColor?: string;
    selectAllText?: string;
    submitText?: string;
    value: comboBoxSelectedItemsType[];
}
