import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18rem;
  background-color: ${(props) => props.theme['base-profile']};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Effect = styled.img`
  width: 23rem;
`

export const LogoImage = styled.img`
  width: 10rem;
  margin-top: -5rem;
`
