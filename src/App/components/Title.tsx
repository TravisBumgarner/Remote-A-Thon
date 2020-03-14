import React from 'react'
import styled from 'styled-components'

import { Text } from 'shared'

const LargeHeader = styled.h1`
    text-transform: uppercase;
    font-weight: 700;
    margin: 1em 0 0.25em 0;
    font-size: 2.5em;
    text-align: center;
`

const Title = () => {
    return <div>
        <LargeHeader>Remote-A-Thon</LargeHeader>
        <Text>A remote hackathon focused on addressing issues that have risen due to Covid-19.</Text>
    </div>
}

export default Title