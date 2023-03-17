import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['base-background']};
  margin: 0 auto;
  max-width: 90rem;
  min-height: calc(100vh - 18.5rem);
`
