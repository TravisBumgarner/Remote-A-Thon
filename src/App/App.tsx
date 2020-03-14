import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Title, Navigation, Home, Contact, GetInvolved, Questions } from './components'
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
                    <Route path="/getinvolved" component={GetInvolved} />
                    <Route path="/questions" component={Questions} />
                </Switch>
            </BrowserRouter>
        </AppWrapper>
    )
}

export default App