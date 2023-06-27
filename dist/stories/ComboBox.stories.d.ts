declare const storyConfig: {
    title: string;
    component: {
        ({ cancelText, placeHolder, primaryColor, selectAllText, submitText, }: import("../types/combobox").comboBoxType): import("react").JSX.Element;
        propTypes: {
            cancelText: import("prop-types").Requireable<string>;
            placeHolder: import("prop-types").Requireable<string>;
            primaryColor: import("prop-types").Requireable<string>;
            selectAllText: import("prop-types").Requireable<string>;
            submitText: import("prop-types").Requireable<string>;
        };
        defaultProps: {
            cancelText: string;
            placeHolder: string;
            primaryColor: string;
            selectAllText: string;
            submitText: string;
        };
    };
    tags: string[];
    argTypes: {
        primaryColor: {
            control: string;
        };
    };
};
export declare const Simple: {
    args: {
        cancelText: string;
        placeHolder: string;
        primaryColor: string;
        selectAllText: string;
        submitText: string;
    };
};
export default storyConfig;
