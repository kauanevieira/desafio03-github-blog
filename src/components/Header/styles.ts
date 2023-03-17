import cover from '../../assets/cover.png'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  margin: 0 auto;

  max-width: 90rem;
  height: 18.5rem;
  display: flex;
  justify-content: center;
  background: url(${cover});
  background-position: center;

  img {
    width: 148px;
    height: 98px;
    margin-top: 64px;
  }
`
