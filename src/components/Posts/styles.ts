import styled from 'styled-components'

export const PostsContainer = styled.section`
  max-width: 54rem;
  width: 100%;
  margin: 4rem auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }
`

export const PostsContent = styled.div`
  max-width: 54rem;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fre;
  gap: 1.5rem;
`
