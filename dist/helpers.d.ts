import { comboBoxDataProviderType, comboBoxSelectedItemsType } from './types/combobox';
export declare const generateOptions: (dataProvider: comboBoxDataProviderType[], selectedValues: comboBoxSelectedItemsType[]) => {
    label: string;
    value: string;
    isSelected: boolean;
}[];
export declare const performStateChange: (dataProvider: comboBoxSelectedItemsType[], identifier: string) => {
    isSelected: boolean;
    label: string;
    value: string;
}[];
export declare const performOnlyChange: (dataProvider: comboBoxSelectedItemsType[], identifier: string) => {
    isSelected: boolean;
    label: string;
    value: string;
}[];
export declare const performSelectAllChange: (dataProvider: comboBoxSelectedItemsType[], stateToSelect: boolean) => {
    isSelected: boolean;
    label: string;
    value: string;
}[];
