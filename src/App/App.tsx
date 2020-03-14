import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Title, Navigation, Home, About, GetInvolved, Questions } from './components'
import { GlobalStyle } from './theme'

const App = () => {
    return (
        <>
        <GlobalStyle />
            <BrowserRouter>
                <Title />
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/getinvolved" component={GetInvolved} />
                    <Route path="/questions" component={Questions} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App