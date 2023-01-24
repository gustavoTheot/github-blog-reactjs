import styled from 'styled-components'

export const ContainerHome = styled.div`
  max-width: 54rem;
`

export const CountRepositories = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 4.5rem;
`

export const SearchForm = styled.form`
  input {
    width: 100%;
    padding: 0.75rem 1rem;

    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 8px;

    outline: none;

    color: ${(props) => props.theme['base-text']};

    margin-top: 0.75rem;
    margin-bottom: 3.75rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
