import React, { ReactNode } from 'react';
interface AppThemeProviderPropType {
    backgroundColor: string;
    borderStyle: string;
    children: ReactNode;
    containerHeight: string;
    containerPadding: string;
    containerWidth: string;
    primaryColor: string;
    fontStyle: string;
    textColor: string;
}
export declare const AppThemeContext: React.Context<null>;
declare const AppThemeProvider: ({ backgroundColor, borderStyle, children, containerHeight, containerPadding, containerWidth, fontStyle, primaryColor, textColor, }: AppThemeProviderPropType) => React.JSX.Element;
export default AppThemeProvider;
