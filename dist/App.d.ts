import React, { ReactNode } from 'react';
import { comboBoxDataProviderType, comboBoxSelectedItemsType } from './types';
interface AppPropType {
    backgroundColor?: string;
    cancelText?: string;
    dataProvider: comboBoxDataProviderType[];
    leftAdornment?: ReactNode;
    onComplete?: (value: comboBoxSelectedItemsType[]) => void;
    placeHolder?: string;
    primaryColor?: string;
    rightAdornment?: ReactNode;
    selectAllText?: string;
    submitText?: string;
    value?: comboBoxSelectedItemsType[];
    textColor?: string;
}
export default function App({ backgroundColor, cancelText, dataProvider, leftAdornment, onComplete, placeHolder, primaryColor, rightAdornment, selectAllText, submitText, textColor, value, }: AppPropType): React.JSX.Element;
export {};
