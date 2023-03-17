import styled from 'styled-components'

export const ProfileContainer = styled.div`
  padding: 2rem;
  max-width: 54rem;
  background: ${(props) => props.theme['base-profile']};
  margin: -5.5rem auto 0;
  border-radius: 10px;
  display: flex;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`
export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-title']};
  }

  a {
    text-decoration: none;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: ${(props) => props.theme['brand-blue']};
  }
`

export const ProfileFooter = styled.footer`
  display: flex;
  gap: 1.5rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-label']};

  > div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`
