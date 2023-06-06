import { RefObject } from 'react';
import { colorsType, comboBoxDataProviderType, comboBoxSelectedItemsType, localeStringType } from './combobox';
export interface popoverType {
    closePopover: () => void;
    colors: colorsType;
    dataProvider: comboBoxDataProviderType[];
    locale: localeStringType;
    onComplete: (value: comboBoxSelectedItemsType[]) => void;
    popoverRef: RefObject<HTMLDivElement>;
    value: comboBoxSelectedItemsType[];
}
