import React from 'react'

import * as S from './Input.styled'

const Input = ({ error, hasErrors, help, hideLabel, id, label, ...props }) => {
  const inputId = id || `${props.name}-${props.type}`
  const helpId = `${inputId}--HELP`
  return (
    <S.Container>
      {!hideLabel && <S.Label htmlFor={inputId}>{label}</S.Label>}
      {help && <S.Help id={helpId}>{help}</S.Help>}
      <S.Input
        aria-describedby={help ? helpId : null}
        hasErrors={hasErrors}
        id={inputId}
        {...props}
      />
      {hasErrors && <S.Error>{error}</S.Error>}
    </S.Container>
  )
}

Input.defaultProps = {
  type: 'text'
}

export default Input
