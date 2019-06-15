import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './global'
import THEME from './theme'

export default function({ children }) {
    return (
        <ThemeProvider theme={THEME}>
            <>
                <GlobalStyles />
                {children}
            </>
        </ThemeProvider>
    )
}
