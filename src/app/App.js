import React from 'react'

import StyleProvider from 'styles/StyleProvider'
import Router from 'routing/Router'
import * as S from './App.styled'

function App() {
    return (
        <StyleProvider>
            <S.Container>
                <Router />
            </S.Container>
        </StyleProvider>
    )
}

export default App
