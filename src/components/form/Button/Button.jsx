import styled from 'styled-components'

export default styled.button`
  background: ${p => p.theme.primary};
  border: 0;
  border-radius: ${p => p.theme.borderRadius};
  color: ${p => p.theme.text_alt};
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  padding: 0.5rem 0.75rem;
  margin-left: 0.5rem

  &:focus {
    box-shadow: 0 0 4px 2px ${p => p.theme.accent};
    outline: 4px solid transparent;
  }
`
