import { ComboBoxDataProviderType, ComboBoxSelectedItemsType } from './types/combobox';
export declare const getSelectedItemsPlaceHolder: (selectedItems: ComboBoxSelectedItemsType[]) => string;
export declare const generateOptions: (dataProvider: ComboBoxDataProviderType[], selectedValues: ComboBoxSelectedItemsType[]) => {
    label: string;
    value: string | number;
    isDisabled: boolean | undefined;
    isSelected: boolean;
}[];
export declare const performStateChange: (dataProvider: ComboBoxSelectedItemsType[], identifier: string | number) => {
    isSelected: boolean;
    isDisabled?: boolean | undefined;
    label: string;
    value: string | number;
}[];
export declare const performOnlyChange: (dataProvider: ComboBoxSelectedItemsType[], identifier: string | number) => {
    isSelected: boolean;
    isDisabled?: boolean | undefined;
    label: string;
    value: string | number;
}[];
export declare const performSelectAllChange: (dataProvider: ComboBoxSelectedItemsType[], stateToSelect: boolean) => {
    isSelected: boolean;
    isDisabled?: boolean | undefined;
    label: string;
    value: string | number;
}[];
