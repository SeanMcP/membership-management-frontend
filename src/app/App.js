import React from 'react'
import { Provider } from 'react-redux'

import { AppContextProvider } from 'context/app/AppContext'
import StyleProvider from 'styles/StyleProvider'
import store from 'store/index'
import Router from 'routing/Router'
import * as S from './App.styled'

function App() {
    return (
        <StyleProvider>
            <Provider store={store}>
                <AppContextProvider>
                    <S.Container>
                        <Router />
                    </S.Container>
                </AppContextProvider>
            </Provider>
        </StyleProvider>
    )
}

export default App
