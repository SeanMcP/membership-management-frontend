import styled from 'styled-components'

export const Section = styled.section`
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: calc(960px + 2rem)) {
        max-width: initial;
        margin-left: 1rem;
        margin-right: 1rem;
    }
`
