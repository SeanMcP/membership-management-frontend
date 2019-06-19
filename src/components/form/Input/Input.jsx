import React from 'react'
import { useField } from 'formik'

import * as S from './Input.styled'

const Input = ({ help, hideLabel, id, label, ...props }) => {
  const [field, meta] = useField(props.name)
  const inputId = id || `${props.name}-${props.type}`
  const helpId = `${inputId}--HELP`
  const hasErrors = meta.touched && meta.error
  return (
    <S.Container>
      {!hideLabel && <S.Label htmlFor={inputId}>{label}</S.Label>}
      {help && <S.Help id={helpId}>{help}</S.Help>}
      <S.Input
        aria-describedby={help ? helpId : null}
        hasErrors={hasErrors}
        id={inputId}
        {...field}
        {...props}
      />
      {hasErrors && <S.Error>{meta.error}</S.Error>}
    </S.Container>
  )
}

Input.defaultProps = {
  type: 'text'
}

export default Input
