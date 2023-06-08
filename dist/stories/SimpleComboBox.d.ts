import React from 'react';
import PropTypes from 'prop-types';
import { comboBoxType } from '../types/combobox';
export declare const SimpleComboBox: {
    ({ cancelText, placeHolder, primaryColor, selectAllText, submitText, }: comboBoxType): React.JSX.Element;
    propTypes: {
        cancelText: PropTypes.Requireable<string>;
        placeHolder: PropTypes.Requireable<string>;
        primaryColor: PropTypes.Requireable<string>;
        selectAllText: PropTypes.Requireable<string>;
        submitText: PropTypes.Requireable<string>;
    };
    defaultProps: {
        cancelText: string;
        placeHolder: string;
        primaryColor: string;
        selectAllText: string;
        submitText: string;
    };
};
