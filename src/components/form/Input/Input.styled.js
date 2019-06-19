import styled, { css } from 'styled-components'

const margin = css`
  margin: 0.5rem 0;
`

export const Container = styled.div``

export const Label = styled.label`
  display: block;
  font-weight: bold;
  ${margin}
`

export const Help = styled.p`
  font-size: ${p => p.theme.fontSize_sm};
  font-style: italic;
  ${margin}
`

export const Input = styled.input`
  background: white;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  font-size: inherit;
  padding: 0.5rem;

  &:focus {
    box-shadow: 0 0 4px 2px ${p => p.theme.primary};
    outline: 4px solid transparent;
  }

  ${p =>
    p.hasErrors &&
    css`
      background: pink;
      border-color: firebrick;
    `}
`

export const Error = styled.div`
  color: firebrick;
  font-size: ${p => p.theme.fontSize_sm};
  ${margin}
`
