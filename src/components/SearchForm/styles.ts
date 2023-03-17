import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.75rem;
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 8px;
  background: ${(props) => props.theme['base-input']};

  input {
    width: 100%;
    background: transparent;
    border: none;
    padding: 0.75rem 1rem;
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }

  button {
    width: 50px;
    height: 40px;
    border: none;
    background: transparent;
    margin-right: 1rem;
    color: ${(props) => props.theme['base-span']};

    &:hover {
      color: ${(props) => props.theme['base-text']};
      transition: color 0.2s;
    }
  }
`
