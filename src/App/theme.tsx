import styled, { createGlobalStyle, css } from 'styled-components'

const FONT_FAMILY = "'Bellota Text', cursive"

const BACKGROUND_COLOR = '#fff'
const FOREGROUND_COLOR = '#000'
const HOVER_COLOR = '#0098d4'

const GlobalStyle = createGlobalStyle`
    html {
        background-color: ${BACKGROUND_COLOR};
        color: ${FOREGROUND_COLOR};
        font-size: 16px;
        font-family: ${FONT_FAMILY};
    }
    a {
        color: ${FOREGROUND_COLOR};
        font-weight: 100;
        text-decoration: none;
        text-transform: uppercase;
        &:hover{
            color: ${HOVER_COLOR}
        }
    }
    ul {
        margin: 0;
        padding: 0;
    }
    li {
        display: block;
    }
`

export {
    GlobalStyle
}