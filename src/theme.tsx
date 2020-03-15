import styled, { createGlobalStyle, css } from 'styled-components'

const FONT_FAMILY = "'Bellota Text', cursive"

const BACKGROUND_COLOR = '#fff'
const FOREGROUND_COLOR = '#000'
const HOVER_COLOR = '#0098d4'
const ACCENT_COLOR = '#70b5d0'

const GlobalStyle = createGlobalStyle`
    html {
        background-color: ${BACKGROUND_COLOR};
        color: ${FOREGROUND_COLOR};
        font-size: 16px;
        font-family: ${FONT_FAMILY};
    }
    a {
        color: ${FOREGROUND_COLOR};
        &:hover{
            color: ${HOVER_COLOR}
        }
    }
`

export {
    GlobalStyle,
    BACKGROUND_COLOR,
    FOREGROUND_COLOR,
    HOVER_COLOR,
    ACCENT_COLOR
}