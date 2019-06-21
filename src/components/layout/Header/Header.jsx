import React from 'react'
import Content from '../Content/Content'

import * as S from './Header.styled'

const Header = props => {
  return (
    <S.Header>
      <Content>
        <S.Link to="/">Memberinho</S.Link>
      </Content>
    </S.Header>
  )
}

export default Header
