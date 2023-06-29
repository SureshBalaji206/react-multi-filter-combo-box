import React, { createContext, ReactNode } from 'react'
import { ThemeProvider } from '@emotion/react'

interface AppThemeProviderPropType {
  backgroundColor: string
  borderStyle: string
  children: ReactNode
  containerHeight: string
  containerPadding: string
  containerWidth: string
  primaryColor: string
  fontStyle: string
  textColor: string
}

export const AppThemeContext = createContext<null>(null)

const AppThemeProvider = ({
  backgroundColor,
  borderStyle,
  children,
  containerHeight,
  containerPadding,
  containerWidth,
  fontStyle,
  primaryColor,
  textColor,
}: AppThemeProviderPropType) => {
  return (
    <AppThemeContext.Provider value={null}>
      <ThemeProvider
        theme={{
          colors: {
            backgroundColor: backgroundColor,
            primaryColor: primaryColor,
            textColor: textColor,
          },
          styles: {
            borderStyle: borderStyle,
            containerHeight: containerHeight,
            containerPadding: containerPadding,
            containerWidth: containerWidth,
            fontStyle: fontStyle,
          },
        }}
      >
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  )
}

export default AppThemeProvider
