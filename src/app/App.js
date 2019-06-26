import React from 'react'
import { Provider } from 'react-redux'

import StyleProvider from 'styles/StyleProvider'
import store from 'store/index'
import Router from 'routing/Router'
import * as S from './App.styled'

function App() {
  return (
    <StyleProvider>
      <Provider store={store}>
        <S.Container>
          <Router />
        </S.Container>
      </Provider>
    </StyleProvider>
  )
}

export default App
