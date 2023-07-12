import React from 'react';
import { AppThemeProviderPropType } from '../types/theme';
export declare const AppThemeContext: React.Context<null>;
declare const AppThemeProvider: ({ backgroundColor, borderStyle, children, containerHeight, containerPadding, containerWidth, fontStyle, primaryColor, textColor, }: AppThemeProviderPropType) => React.JSX.Element;
export default AppThemeProvider;
