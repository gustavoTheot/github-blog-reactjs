import styled from 'styled-components'

export const ContainerAboutRepository = styled.div`
  padding: 2rem 2.5rem;

  background-color: ${(props) => props.theme['base-profile']};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  margin-top: -6rem;
`

export const HeaderRepository = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  a {
    font-size: 0.75rem;
    font-weight: 700;
    color: ${(props) => props.theme.blue};
    text-decoration: none;

    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`

export const TitleRepository = styled.main`
  h1 {
    color: ${(props) => props.theme['base-title']};
  }
`

export const DescriptionRepository = styled.footer`
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
