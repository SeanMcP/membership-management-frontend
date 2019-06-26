import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: ${p =>
    isNaN(p.columns) ? p.columns : `repeat(${p.columns}, 1fr)`};
`

Grid.defaultProps = {
  columns: 1
}

export default Grid
