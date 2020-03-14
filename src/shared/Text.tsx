import React, { Component } from 'react'

import styled, { css } from 'styled-components'

const NormalText = styled.p`
    font-weight: 400;
    margin: 0.5em 0;
    font-size: 1em;
`

type Props = {
    children: React.ReactNode
}

const Header = ({ children }: Props) => {
    return <NormalText>{children}</NormalText>
}

export default Header