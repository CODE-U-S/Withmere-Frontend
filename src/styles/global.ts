import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        font-family: ${props => props.theme.fonts.main};
    }
    
    body {
        background-color: ${props => props.theme.colors.background};
    }
    
    ul {
        list-style: none;
    }
`