import styled from 'styled-components'

export const ContainerProfile = styled.div`
  padding: 2rem 2.5rem;

  background-color: ${(props) => props.theme['base-profile']};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  margin-top: -6rem;

  img {
    width: 9.25rem;
    height: 9.25rem;

    border-radius: 8px;
  }
`

export const AboutPeople = styled.div`
  color: ${(props) => props.theme['base-text']};

  display: flex;
  flex-direction: column;
`

export const People = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  a {
    font-size: 0.75rem;
    font-weight: 700;
    color: ${(props) => props.theme.blue};
    text-decoration: none;

    display: flex;
    gap: 0.5rem;
  }
`

export const DescriptionPeople = styled.div`
  margin-top: 0.5rem;
`

export const Social = styled.div`
  margin-top: 1.5rem;

  ul {
    display: flex;
    align-items: center;
    gap: 1rem;

    li {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      color: ${(props) => props.theme['base-span']};
    }
  }
`
