import styled, { createGlobalStyle, css } from 'styled-components'

const FONT_FAMILY = "'Bellota Text', cursive"

const BACKGROUND_COLOR = '#133C55'
const FOREGROUND_COLOR = '#78E3FD'
const HOVER_COLOR = '#D1F5FF'

const GlobalStyle = createGlobalStyle`
    html {
        background-color: ${BACKGROUND_COLOR};
        color: ${FOREGROUND_COLOR};
        font-size: 18px;
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
`

export {
    GlobalStyle
}