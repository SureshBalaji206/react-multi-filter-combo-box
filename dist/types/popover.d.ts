import { RefObject } from 'react';
import { ComboBoxDataProviderType, ComboBoxSelectedItemsType } from './combobox';
export interface popoverType {
    cancelText?: string;
    closePopover: () => void;
    dataProvider: ComboBoxDataProviderType[];
    onComplete: (value: ComboBoxSelectedItemsType[]) => void;
    popoverRef: RefObject<HTMLDivElement>;
    primaryColor?: string;
    selectAllText?: string;
    submitText?: string;
    value: ComboBoxSelectedItemsType[];
}
