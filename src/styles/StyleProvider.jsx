import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './global'
import { BrandProvider, useBrandContext } from 'context/brand/BrandContext'
import THEME from 'styles/theme'

function StyleProvider({ children }) {
  const [state] = useBrandContext()
  return (
    <ThemeProvider theme={{ ...state, ...THEME.variables }}>
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  )
}

export default function({ children }) {
  return (
    <BrandProvider>
      <StyleProvider>{children}</StyleProvider>
    </BrandProvider>
  )
}
