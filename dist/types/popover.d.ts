import { RefObject } from 'react';
import { comboBoxDataProviderType, comboBoxSelectedItemsType } from './combobox';
export interface popoverType {
    closePopover: () => void;
    dataProvider: comboBoxDataProviderType[];
    onComplete: (value: comboBoxSelectedItemsType[]) => void;
    popoverRef: RefObject<HTMLDivElement>;
    value: comboBoxSelectedItemsType[];
}
