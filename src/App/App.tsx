import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import {
    Title,
    Navigation,
    Home,
    Contact,
    Participate,
    Questions,
    Error,
    About,
    Sponsor,
    Problem
} from './components'
import { GlobalStyle } from 'theme'

const AppWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const App = () => {
    return (
        <AppWrapper>
            <GlobalStyle />
            <BrowserRouter>
                <Title />
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/participate" component={Participate} />
                    <Route path="/questions" component={Questions} />
                    <Route path="/about" component={About} />
                    <Route path="/sponsor" component={Sponsor} />
                    <Route path="/problem" component={Problem} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        </AppWrapper>
    )
}

export default App