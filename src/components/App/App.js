import React from 'react'

import StyleProvider from 'styles/StyleProvider'
import Content from 'components/layout/Content/Content'
import * as S from './App.styled'

function App() {
    return (
        <StyleProvider>
            <Content>
                <S.Container>Hello world</S.Container>
            </Content>
        </StyleProvider>
    )
}

export default App
