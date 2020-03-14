import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import {ACCENT_COLOR } from 'theme'

const NormalSection = styled.div`
    border: 2px solid ${ACCENT_COLOR};
    border-radius: 1em;
    padding: 1em;
    margin: 1em 0;
`

type Props = {
    children: React.ReactNode
}

const PageSection = ({ children }: Props) => {
    return <NormalSection>{children}</NormalSection>
}

export default PageSection

