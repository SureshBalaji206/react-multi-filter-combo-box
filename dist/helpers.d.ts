import { ComboBoxDataProviderType, ComboBoxOptionsType, ComboBoxSelectedItemsType } from './types/combobox';
export declare const getSelectedItemsPlaceHolder: (selectedItems: ComboBoxOptionsType[]) => string;
export declare const generateOptions: (dataProvider: ComboBoxDataProviderType[], selectedValues: ComboBoxOptionsType[] | ComboBoxOptionsType) => {
    label: string;
    value: string | number;
    isDisabled: boolean;
    isSelected: boolean;
}[];
export declare const performStateChange: (dataProvider: ComboBoxSelectedItemsType[], identifier: string | number) => {
    isSelected: boolean;
    isDisabled: boolean;
    label: string;
    value: string | number;
}[];
export declare const performOnlyChange: (dataProvider: ComboBoxSelectedItemsType[], identifier: string | number) => {
    isSelected: boolean;
    isDisabled: boolean;
    label: string;
    value: string | number;
}[];
export declare const performSelectAllChange: (dataProvider: ComboBoxSelectedItemsType[], stateToSelect: boolean) => {
    isSelected: boolean;
    isDisabled: boolean;
    label: string;
    value: string | number;
}[];
