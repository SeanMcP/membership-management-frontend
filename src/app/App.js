import React from 'react'

import { AppContextProvider } from 'context/app/AppContext'
import StyleProvider from 'styles/StyleProvider'
import Router from 'routing/Router'
import * as S from './App.styled'

function App() {
    return (
        <StyleProvider>
            <AppContextProvider>
                <S.Container>
                    <Router />
                </S.Container>
            </AppContextProvider>
        </StyleProvider>
    )
}

export default App
