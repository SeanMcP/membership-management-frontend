import React from 'react'
import Content from 'components/layout/Content/Content'
import APP from 'constants/app'

import * as S from './Header.styled'

const Header = props => {
  return (
    <S.Header>
      <Content>
        <S.Link to="/">{APP.TITLE}</S.Link>
      </Content>
    </S.Header>
  )
}

export default Header
