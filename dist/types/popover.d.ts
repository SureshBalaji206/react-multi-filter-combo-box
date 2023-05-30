import { RefObject } from 'react';
import { comboBoxDataProviderType, comboBoxSelectedItemsType } from './combobox';
export interface popoverType {
    popoverRef: RefObject<HTMLDivElement>;
    closePopover: () => void;
    dataProvider: comboBoxDataProviderType[];
    onComplete: (value: comboBoxSelectedItemsType[]) => void;
    value: comboBoxSelectedItemsType[];
}
