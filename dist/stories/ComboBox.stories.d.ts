declare const storyConfig: {
    title: string;
    component: {
        ({ backgroundColor, cancelText, placeHolder, primaryColor, selectAllText, submitText, textColor, }: import("../types").comboBoxType): import("react").JSX.Element;
        propTypes: {
            backgroundColor: import("prop-types").Requireable<string>;
            cancelText: import("prop-types").Requireable<string>;
            placeHolder: import("prop-types").Requireable<string>;
            primaryColor: import("prop-types").Requireable<string>;
            selectAllText: import("prop-types").Requireable<string>;
            submitText: import("prop-types").Requireable<string>;
            textColor: import("prop-types").Requireable<string>;
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
        placeHolder: string;
        primaryColor: string;
        selectAllText: string;
        submitText: string;
        textColor: string;
    };
};
export default storyConfig;
