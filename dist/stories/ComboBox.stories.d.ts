declare const storyConfig: {
    title: string;
    component: {
        ({ backgroundColor, cancelText, isSingleSelect, placeHolder, primaryColor, selectAllText, submitText, textColor, }: import("../types/combobox").ComboBoxType): import("react").JSX.Element;
        propTypes: {
            backgroundColor: import("prop-types").Requireable<string>;
            cancelText: import("prop-types").Requireable<string>;
            isSingleSelect: import("prop-types").Requireable<boolean>;
            placeHolder: import("prop-types").Requireable<string>;
            primaryColor: import("prop-types").Requireable<string>;
            selectAllText: import("prop-types").Requireable<string>;
            submitText: import("prop-types").Requireable<string>;
            textColor: import("prop-types").Requireable<string>;
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
    tags: string[];
    argTypes: {
        backgroundColor: {
            control: string;
        };
        primaryColor: {
            control: string;
        };
        textColor: {
            control: string;
        };
    };
};
export declare const Simple: {
    args: {
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
export default storyConfig;
