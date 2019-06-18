import React from 'react'

import * as S from './Content.styled'

const Content = ({ children, ...props }) => (
    <S.Section {...props}>{children}</S.Section>
)

export default Content
