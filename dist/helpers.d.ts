import { comboBoxDataProviderType, comboBoxSelectedItemsType } from './types';
export declare const getSelectedItemsPlaceHolder: (selectedItems: comboBoxSelectedItemsType[]) => string;
export declare const generateOptions: (dataProvider: comboBoxDataProviderType[], selectedValues: comboBoxSelectedItemsType[]) => {
    label: string;
    value: string | number;
    isDisabled: boolean | undefined;
    isSelected: boolean;
}[];
export declare const performStateChange: (dataProvider: comboBoxSelectedItemsType[], identifier: string | number) => {
    isSelected: boolean;
    isDisabled?: boolean | undefined;
    label: string;
    value: string | number;
}[];
export declare const performOnlyChange: (dataProvider: comboBoxSelectedItemsType[], identifier: string | number) => {
    isSelected: boolean;
    isDisabled?: boolean | undefined;
    label: string;
    value: string | number;
}[];
export declare const performSelectAllChange: (dataProvider: comboBoxSelectedItemsType[], stateToSelect: boolean) => {
    isSelected: boolean;
    isDisabled?: boolean | undefined;
    label: string;
    value: string | number;
}[];
