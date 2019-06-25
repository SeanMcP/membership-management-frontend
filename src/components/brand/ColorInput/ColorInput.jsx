import React from 'react'
import humanize from 'humanize-string'

import * as S from './ColorInput.styled'

const ColorInput = ({ field, ...props }) => {
  return (
    <S.Label>
      <b>{humanize(field)}</b>
      <S.Input type="color" {...props} />
    </S.Label>
  )
}

export default ColorInput
