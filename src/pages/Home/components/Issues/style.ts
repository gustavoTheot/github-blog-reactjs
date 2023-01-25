import styled from 'styled-components'

export const ListRepositories = styled.ul`
  a {
    text-decoration: none;
    overflow: hidden;

    li:hover {
      border: 2px solid ${(props) => props.theme['base-border']};
    }
  }

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  margin-bottom: 14.625rem;

  li {
    list-style: none;

    padding: 2rem;
    border: 2px solid transparent;
    border-radius: 10px;

    background-color: ${(props) => props.theme['base-post']};
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-bottom: 1.25rem;

    h1 {
      font-size: 1.25rem;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-label']};
    }
  }
`
