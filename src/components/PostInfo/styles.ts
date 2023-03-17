import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  padding: 2rem;
  width: 100%;
  max-width: 54rem;
  background: ${(props) => props.theme['base-profile']};
  margin: -5.5rem auto 0;
  border-radius: 10px;
  gap: 2rem;
`

export const PostInfoHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    display: flex;
    gap: 1rem;
    align-items: center;
    color: ${(props) => props.theme['brand-blue']};

    span {
      font-size: 0.75rem;
    }
  }
`

export const PostInfoTitle = styled.strong`
  margin-top: 0.5rem;
  display: block;
  gap: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-span']};
  }
`

export const PostInfoFooter = styled.footer`
  margin-top: 0.5rem;
  display: flex;
  gap: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-span']};
  }
`
