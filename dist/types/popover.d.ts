import { RefObject } from 'react';
import { comboBoxDataProviderType, comboBoxSelectedItemsType, localeStringType } from './combobox';
export interface popoverType {
    closePopover: () => void;
    dataProvider: comboBoxDataProviderType[];
    locale: localeStringType;
    onComplete: (value: comboBoxSelectedItemsType[]) => void;
    popoverRef: RefObject<HTMLDivElement>;
    value: comboBoxSelectedItemsType[];
}
