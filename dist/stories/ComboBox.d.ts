import React from 'react';
import PropTypes from 'prop-types';
import { ComboBoxType } from '../types/combobox';
export declare const ComboBoxStory: {
    ({ backgroundColor, cancelText, isSingleSelect, placeHolder, primaryColor, selectAllText, submitText, textColor, }: ComboBoxType): React.JSX.Element;
    propTypes: {
        backgroundColor: PropTypes.Requireable<string>;
        cancelText: PropTypes.Requireable<string>;
        isSingleSelect: PropTypes.Requireable<boolean>;
        placeHolder: PropTypes.Requireable<string>;
        primaryColor: PropTypes.Requireable<string>;
        selectAllText: PropTypes.Requireable<string>;
        submitText: PropTypes.Requireable<string>;
        textColor: PropTypes.Requireable<string>;
    };
    defaultProps: {
        backgroundColor: string;
        cancelText: string;
        isSingleSelect: boolean;
        placeHolder: string;
        primaryColor: string;
        selectAllText: string;
        submitText: string;
        textColor: string;
    };
};
