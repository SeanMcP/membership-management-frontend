import styled from 'styled-components'
import { Link as _Link } from 'react-router-dom'

export const Header = styled.header`
  background: ${p => p.theme.header_background};
  color: ${p => p.theme.header_text};
  padding: 1rem 0;
`

export const Link = styled(_Link)`
  color: ${p => p.theme.header_text};
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
