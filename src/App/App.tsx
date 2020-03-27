import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import {
    ScrollToTop,
    ExperimentOne
} from './components'
import { GlobalStyle } from 'theme'

const AppWrapper = styled.div`
`

const App = () => {
    return (
        <AppWrapper>
            <GlobalStyle />
            <BrowserRouter>
                <ScrollToTop />
                <Switch>
                    <Route exact path="/" component={ExperimentOne} />
                </Switch>
            </BrowserRouter>
        </AppWrapper>
    )
}

export default App