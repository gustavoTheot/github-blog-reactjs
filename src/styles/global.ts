import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${(props) => props.theme['base-background']};
        font-family: 'Nunito', sans-serif;
    }

    h1, p, span, li{
        color: ${(props) => props.theme['base-text']};
    }
`
