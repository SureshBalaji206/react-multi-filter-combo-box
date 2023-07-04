import { comboBoxDataProviderType, comboBoxSelectedItemsType } from './types';
export declare const getSelectedItemsPlaceHolder: (selectedItems: comboBoxSelectedItemsType[]) => string;
export declare const generateOptions: (dataProvider: comboBoxDataProviderType[], selectedValues: comboBoxSelectedItemsType[]) => {
    label: string;
    value: string;
    isDisabled: boolean | undefined;
    isSelected: boolean;
}[];
export declare const performStateChange: (dataProvider: comboBoxSelectedItemsType[], identifier: string) => {
    isSelected: boolean;
    isDisabled?: boolean | undefined;
    label: string;
    value: string;
}[];
export declare const performOnlyChange: (dataProvider: comboBoxSelectedItemsType[], identifier: string) => {
    isSelected: boolean;
    isDisabled?: boolean | undefined;
    label: string;
    value: string;
}[];
export declare const performSelectAllChange: (dataProvider: comboBoxSelectedItemsType[], stateToSelect: boolean) => {
    isSelected: boolean;
    isDisabled?: boolean | undefined;
    label: string;
    value: string;
}[];
