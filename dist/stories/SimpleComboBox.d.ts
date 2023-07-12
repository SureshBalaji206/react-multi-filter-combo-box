import React from 'react';
import PropTypes from 'prop-types';
import { ComboBoxType } from '../types/combobox';
export declare const SimpleComboBox: {
    ({ backgroundColor, cancelText, placeHolder, primaryColor, selectAllText, submitText, textColor, }: ComboBoxType): React.JSX.Element;
    propTypes: {
        backgroundColor: PropTypes.Requireable<string>;
        cancelText: PropTypes.Requireable<string>;
        placeHolder: PropTypes.Requireable<string>;
        primaryColor: PropTypes.Requireable<string>;
        selectAllText: PropTypes.Requireable<string>;
        submitText: PropTypes.Requireable<string>;
        textColor: PropTypes.Requireable<string>;
    };
    defaultProps: {
        backgroundColor: string;
        cancelText: string;
        placeHolder: string;
        primaryColor: string;
        selectAllText: string;
        submitText: string;
        textColor: string;
    };
};
