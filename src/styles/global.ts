import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 4px ${(props) => props.theme['base-label']};

    }

    body {
        background: ${(props) => props.theme['base-input']};
        color: ${(props) => props.theme['base-text']};
        min-height: 100vh;
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 1rem Roboto, sans-serif;
        line-height: 1.6;
    }
    button {
        border: none;
        cursor: pointer;
    }
`
