import React from 'react'
import styled from 'styled-components'

const LargeHeader = styled.h1`
    text-transform: uppercase;
    font-weight: 700;
    margin: 1em 0;
    font-size: 2.5em;
`

const Title = () => {
    return <div>
        <LargeHeader>Remote-A-Thon</LargeHeader>
    </div>
}

export default Title